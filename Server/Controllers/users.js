const User = require('../models/user');
const jwt = require('jsonwebtoken');


/*log details */
const auth =async(req,res)=>{
    const user = req.user;
    const userDetails = await User.findById(user.id)
    res.json(userDetails)
}

module.exports = {auth}