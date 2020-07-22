require('./task.js');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: String, 
    tasks: [taskSchema]
});

module.exports = mongoose.model('Category', categorySchema)