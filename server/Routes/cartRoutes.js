const express = require('express')
const { addToCart, getCartItems, removeCartItem } = require('../Controllers/cartController')
const isAuthenticated = require('../middleware/isAuthenticated')

const routerCart=express()

routerCart.get('/getitems',getCartItems)

routerCart.post('/additem',addToCart)

routerCart.delete('/removeitem/:id',removeCartItem)

module.exports=routerCart