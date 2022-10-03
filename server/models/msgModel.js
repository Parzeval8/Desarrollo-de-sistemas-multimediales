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
        type: "",//Nose que va aca :C
        ref: "User",
        required: true,
    },
    },
    {
        times:true,
    }
);