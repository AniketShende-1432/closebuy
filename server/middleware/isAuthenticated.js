const isAuthenticated = async (req, res, next) => {
    try {
        console.log(req.session.user)
        if (req.session.user) {
            next();
        } else {
            //    return res.redirect('http://localhost:3000/login');
            return res.status(401).json({
                authentic: false
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = isAuthenticated;


module.exports = isAuthenticated