const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String, 
    completed:{
        type: Boolean,
        required: true
    },
    tasks: [mongoose.ObjectId], 
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);