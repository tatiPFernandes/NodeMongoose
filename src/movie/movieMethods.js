const { updateOne } = require("./movieModels")
const Movie = require("./movieModels")

exports.addMovie = async(movieObj) =>{
    try{
        const movie = await new Movie(movieObj)
        await movie.save()
        console.log(`Successfully added ${movie.title}`)
    }catch(error){
        console.log(error)
    }
}

exports.listMovies = async() =>{
    try{
        console.log(await Movie.find({}))
    }catch(error){
        console.log(error)
    }
}

exports.updateMovie = async(movieObj, key) => {
    try{
      await Movie.updateOne(movieObj , key)
        //await movieUpdated.save()
    }catch(error){
        console.log(error)
    }

}
