require("./db/connection")


const yargs = require("yargs")

const {addMovie, listMovies, updateMovie} = require("./movie/movieMethods")

const app = async(args) =>{
    switch(process.argv[2]){
        case "add":
        addMovie({
            title:args.title,
            actor: args.actor

        })
        break;

        case"list":
        listMovies();
        break;

        case "update":
            updateMovie({
                title:args.title,
                actor: args.actor
            })

            break;
        default:
            console.log("Incorecct command")
        break;
    }
}

app(yargs.argv)