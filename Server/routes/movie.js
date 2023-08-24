const express = require('express');
const router = express.Router();
const {movieDetails} = require('../Controllers/movie')
const {verifyToken} = require('../middlewares/auth')

/*Movie details Route */
router.get('/:id', verifyToken, movieDetails)



module.exports = router