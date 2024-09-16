const cart = require("../Models/cart");
const cloudinary = require('cloudinary').v2
const { ObjectId } = require('mongodb');


const getCartItems = async (req, res) => {
  try {
    const cartItems = await cart.find();
    res.json({
      success: true,
      cart: cartItems
    });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const addToCart = async (req, res) => {
  console.log(req.session.user, "j")
  console.log(req.session, "i")
  try {
    const { name, price, quantity } = req.body;

    const uploadedFile = req.files.image
    const base64DataUrl = `data:${uploadedFile.mimetype};base64,${uploadedFile.data.toString('base64')}`;
    const existingCartItem = await cart.findOne({ name });



        if (existingCartItem) {
            existingCartItem.quantity += Number(quantity);

      await existingCartItem.save();
      return res.status(200).json(
        {
          success: true,
          cart: existingCartItem
        })
    }
    const uploadImage = await cloudinary.uploader.upload(base64DataUrl);

    const newCartItem = new cart({
      name,
      price: price, // Ensure price is stored as a number
      quantity: Number(quantity),
      image: uploadImage.secure_url,
    });
    await newCartItem.save();
    res.status(201).json({
      success: true,
      cart: newCartItem
    });

  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const result = await cart.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json({ success: true, message: `Deleted item with id ${id}` });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ success: true, message: 'Internal server error' });
  }
}

module.exports = { addToCart, getCartItems, removeCartItem }

