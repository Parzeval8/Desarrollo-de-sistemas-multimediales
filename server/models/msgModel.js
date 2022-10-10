const mongoose = require("mongoose");

const msgSchema = mongoose.Schema({
    msg: {
        text: { 
            type:String,
            required: true,
        },
    },
    users: Array,
    
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    },
    {
        times:true,
    }
);

module.exports = mongoose.model("Messages", MessageSchema);