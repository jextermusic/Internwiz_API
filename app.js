require("dotenv").config({path: './.env'});
const express = require("express");
// var cors = require('cors')
const app = express();
 // Use this after the variable declaration
// app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Set this to true
    next();
});

// db connection
require("./models/database").connectDatabase();

// logger
const logger = require("morgan");
const ErrorHandler = require("./utils/errorHandler");
app.use(logger("tiny"));
// body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// session and cookie
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
}));
app.use(cookieparser());

// CORS


// express file-upload
const fileupload = require("express-fileupload");
app.use(fileupload());

// routes
app.use("/", require("./routes/indexRoutes"));
app.use("/resume", require("./routes/resumeRoutes"))
app.use("/employe", require("./routes/employeRoutes"))


// error handling
const { generatedErrors } = require("./middlewares/errors");
app.all("*", (req,res,next) => {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
});
app.use(generatedErrors);


app.listen(process.env.PORT,
    console.log(`server is running on ${process.env.PORT}`)
    );