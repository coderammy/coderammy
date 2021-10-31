const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    Gender: {
        type: String,
        enum: ["Male", "Female"],
    }
});

module.exports = mongoose.model("user", userSchema);
