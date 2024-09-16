const mongoose = require('mongoose');

const connectToDB=()=>{
    const db =mongoose.connect(process.env.MONGODB_URI, {
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Connection error', error);
    });

    return db
}


module.exports = connectToDB;
