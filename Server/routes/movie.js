const express = require('express');
const router = express.Router();
const {movieDetails} = require('../Controllers/movie')


/*Movie details Route */
router.get('/:id', movieDetails)



module.exports = router