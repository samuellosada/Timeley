const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            email: req.body.email,
            password: req.body.password
        });  
        user.save();
        res.json(user);
    } catch(err){
        res.json({message: err});
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({_id: req.params.userId});
        res.json(deletedUser);
    } catch(err){
        res.json({message: err});
    }
});

module.exports = router; 