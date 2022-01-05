const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.port || 4000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect mongodb database
const mongoUrl = "mongodb://127.0.0.1:27017/productDb";
mongoose.connect(mongoUrl, {
    useNewUrlparser: true,
    useUnifiedTopology: true
}, err => {
    if (!err) {
        return console.log("Database connected");
    }
    console.log("Databace connection error:", err);
});

/////////////////////////////////////////Routes///////////////////////////////////////
app.get("/", (req, res) => {
    res.json("Welcome To Product API Service");
});

app.use(require("./Routes/productRoutes"));

// handle invalid routes 
app.use((req, res, next) => {
    const err = new Error("404 Not Found!!!");
    err.status = 404;
    next(err);
});

// handle error
app.use((err, req, res, next) => {
    // console.log("Error:", err.message);
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            status: err.status || 500
        }
    });
});

app.listen(port, err => {
    if (!err) {
        console.log("Server started at port:", port);
    }
});