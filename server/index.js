const express = require('express');
const cors = require('cors');
const dotenv= require('dotenv')
const cloudinary=require('cloudinary').v2
const fileUpload=require('express-fileupload');
const  routerCart  = require('./routes/cartRoutes');
const connectToDB = require('./db/connection');
const routerAuth = require('./routes/authRoutes.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');


const app=express();

dotenv.config()
app.use(fileUpload({
  useTempFiles:false
}))

app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}))

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  store:  MongoStore.create({mongoUrl:process.env.MONGODB_URI}),
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 30 * 60 * 1000
    }
}));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}))

app.use('/api/cart',routerCart)

app.use('/api/auth',routerAuth)



cloudinary.config({ 
  cloud_name: process.env.ClOUDINARY_CLIENT_NAME, 
  api_key: process.env.ClOUDINARY_CLIENT_API, 
  api_secret: process.env.ClOUDINARY_CLIENT_SECRET 
});

connectToDB()

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
