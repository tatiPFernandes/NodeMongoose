const { update } = require("./movieModels")
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

exports.updateMovie = async(movieObj) => {
    try{
      await Movie.updateOne(movieObj)
        //await movieUpdate.save()
    }catch(error){
        console.log(error)
    }

}

exports.deleteMovie = async(movieObj, key)=>{
    try{
        await Movie.deleteOne(movieObj, key)

    }catch(error){
        console.log(error)
    }
}