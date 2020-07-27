const mongoose = require('mongoose');
const categoryModel = require('./category.js');

const UserSchema = new mongoose.Schema({
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
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    categories: {
        type: [categoryModel.schema]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);