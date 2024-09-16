const { oneMinuteExpiryCheck, threeMinuteExpiryCheck } = require("../helper/otpValidate");
const auth = require("../models/auth");

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

const login = async (req, res) => {
    try {
        const { mobilenumber } = req.body

        console.log(req.body)
        const oldOTP = await auth.findOne({ mobilenumber })
        if (oldOTP) {
            const toSendNextOTP = await oneMinuteExpiryCheck(oldOTP.timestamp)

            if (!toSendNextOTP) {
                return res.status(400).json({
                    success: false,
                    message: "Please try again after sometime"
                })
            }
        }



        const otp = generateOtp();
        console.log(otp, mobilenumber)
        const timenow = new Date().getTime()

        const fetch = (await import('node-fetch')).default;


        const response = await fetch(`https://2factor.in/API/V1/${process.env.SMS_API_KEY}/SMS/${mobilenumber}/${otp}/:otp_template_name`, {
            // const response = await fetch(`https://2factor.in/API/V1/${process.env.REACT_APP_SMS_API_KEY}/SMS/${fullMobileNumber}/AUTOGEN2/:otp_template_name`, {
        });
        console.log(req.session.user)

        const jsonData = await response.json();
        console.log(jsonData)
        if (jsonData.Status == 'Success') {
            console.log('OTP sent successfully.');
            const newOTP = await auth.findOneAndUpdate(
                { mobilenumber },
                { otp, timestamp: new Date(timenow) },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            )
            return res.status(200).json({
                success: true,
                message: "OTP sent to mobile number"
            })

        } else {
            console.error('Failed to send OTP:', jsonData.error);
            return res.status(400).json({
                success: false,
                message: "Failed to send otp"
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


const verifyotp = async (req, res) => {
    try {
        let { mobilenumber, otp } = req.body
        otp = Number(otp)
        console.log(mobilenumber, otp, 'in verification')
        const otpExist = await auth.findOne({ mobilenumber, otp })

        if (!otpExist) {
            return res.status(400).json({
                success: false,
                message: "Wrong OTP"
            })
        }

        const isOTPExpired = await threeMinuteExpiryCheck(otpExist.timestamp)

        if (isOTPExpired) {
            return res.status(400).json({
                success: false,
                message: "OTP Expired"
            })
        }
        req.session.user = { mobilenumber };
        await req.session.save(); // Save the session explicitly

        console.log(req.session.user)
        console.log(req.session)
        res.status(200).json({
            success: true,
            message: "Correct OTP"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).json({
                    success: false,
                    message: 'Failed to logout'
                });
            } else {
                res.clearCookie('connect.sid')
                res.status(200).json({
                    success: true,
                    message: 'Logged out successfully'
                });
            }
        });
    } catch (error) {
        console.error('Caught an error:', error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


const checksession=async(req,res)=>{
    try {
        if(req.session.user)
            {
                return res.status(200).json({
                    success:true,
                    authentic:true
                })
            }

        res.status(401).json({
            success:false,
            authentic:false
        })
    } catch (error) {
        console.error('Caught an error:', error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

module.exports = { logout, login, verifyotp,checksession }