var express = require('express');
var router = express.Router();
const {verifyToken} =require('../middlewares/auth')
const {auth} =require('../Controllers/users')

/* GET users listing. */
router.post('/auth',verifyToken, auth)

module.exports = router;
