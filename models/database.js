const mongoose = require("mongoose");

exports.connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected successfully");
    } catch (error) {
        console.log(error.message);
    }
};