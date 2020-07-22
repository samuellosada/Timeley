const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String, 
    completed:{
        type: Boolean,
        required: true
    },
    tasks: [taskSchema], 
}, {
    timestamps: true
});

module.export = mongoose.model('Task', taskSchema);