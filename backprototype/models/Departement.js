const mongoose = require('mongoose');
const departementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    timestamps:
    true
    
});