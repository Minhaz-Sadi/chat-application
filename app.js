// external import
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require('./router/loginRouter.js');
const usersRouter = require('./router/usersRouter.js');
const inboxRouter = require('./router/inboxRouter.js');


// internal import
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler.js');


const app = express();
dotenv.config();

// databse connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>console.log("database connection successful!"))
.catch(err => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// route setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler)

// error handling
app.use(errorHandler)




app.listen(process.env.PORT, ()=>{
    console.log(`app listening port ${process.env.PORT}`);
    
})