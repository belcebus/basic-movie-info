const fetch = require("node-fetch");


async function getMovie(title, omdbApiKey) {

    var url = "http://www.omdbapi.com/?t="+ title + "&apikey=" + omdbApiKey;
    const res = await fetch(url);
    return res.json();
}

module.exports = getMovie;