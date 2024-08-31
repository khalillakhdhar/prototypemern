const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    phone: {
        type: String,
    
    },
    position: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    departementId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departement'
    },
    profilePicture: {
        type: String,
     //   default: 'https://www.gravatar.com/avatar/
    },
    timestamps:
    true

});
module.exports = mongoose.model('Employee', employeeSchema);