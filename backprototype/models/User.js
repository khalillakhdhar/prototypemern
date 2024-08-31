const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    role:
    {
        type: String,
        enum: ['Admin', 'HR Manager'],
        required:true
    }
    ,timestamps:
     true
    
    
});