const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique:true,
        require:true

    },
    actor:{
        type:String,
        require:true

    },
    actress:{
        type: String,
        require: true
    },
    rating:{
        type: String,
        require: true
    },
    year:{
        type: Number,
        require: true
    }



})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;