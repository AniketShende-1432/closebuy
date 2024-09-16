const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: String,
    price: String,
    quantity: Number,
   image:String
});

module.exports = mongoose.model('cart', cartSchema);
