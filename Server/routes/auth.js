const  express = require('express');
const router = express.Router();
const {register, login} =require('../Controllers/auth')

/* POST SignUp */
router.post('/register', register);

/* POST Login */
router.post('/login',login);

module.exports = router;
