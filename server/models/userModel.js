const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 4,
        max: 12,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 30,
    },

    password: {
        type: String,
        required: true,
        min: 5,
        max: 12,
    },

    avatarImage: {
        type: String,
        default: "",
    },

    avatarImageSet: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Users", userSchema);