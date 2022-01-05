const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

router.get("/products", (req, res, next) => {
    // console.log("\nFetch product request");
    productModel.find()
        .then(docs => {
            if (docs.length === 0) {
                const err = new Error("No Products Found!!!");
                err.status = 404
                return next(err);
            }
            // console.log("Product fetch successfull");
            res.status(200).json(docs);
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;