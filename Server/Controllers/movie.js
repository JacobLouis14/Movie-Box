const axios = require('axios')


const movieDetails =(req,res)=>{
    const id = req.params.id
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API}`)
    .then(response=> res.json(response.data))
    .catch(err=> console.log(err))
}


module.exports = {movieDetails}