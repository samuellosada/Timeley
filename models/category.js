const mongoose = require('mongoose');
const taskModel = require('./task.js');

const categorySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: String, 
    tasks: [taskModel.schema]
});

module.exports = mongoose.model('Category', categorySchema)