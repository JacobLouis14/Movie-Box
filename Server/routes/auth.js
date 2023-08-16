const  express = require('express');
const router = express.Router();
const register =require('../Controllers/auth')

/* GET home page. */
router.post('/register', register);

module.exports = router;
