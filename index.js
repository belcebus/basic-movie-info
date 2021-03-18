const getMovie = require("./movie.js");
const core = require("@actions/core");

async function run() {
    const movieTitle = core.getInput("movie-title");
    const omdbApiKey = core.getInput("api-key"); 
    try{
        const movie = await getMovie(movieTitle.replace(" ","+"),omdbApiKey);

        core.setOutput("movie-title",movie.Title);
        core.setOutput("movie-director",movie.Director);
        core.setOutput("movie-year",movie.Year);
        core.setOutput("movie-score",movie.imdbRating);
        core.setOutput("movie-plot",movie.Plot);
    
        console.log("Movie \"" + movie.Title + 
                    "\" directed by " + movie.Director + 
                    " in " + movie.Year + 
                    " with an IMDB score of " + movie.imdbRating + 
                    ". Plot: " + movie.Plot);
    }catch(error){
        core.setFailed(error.message);
    }
}

run();