const bcrypt = require('bcrypt')
const User = require('../models/user.js')


/*Regitering User */
const register = async(req, res)=>{
    try {
        const {
            Name,
            email,
            password,
            recentSearches
        } =req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            Name,
            email,
            password: passwordHash,
            recentSearches
        });

        const savedUser = await newUser.save();
        res.status(201,res.send(savedUser))
    } catch (error) {
        res.status(500,res.send(error.message))
    }
}

module.exports = register