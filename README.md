# movie-info GitHub Action

## Description

GitHub Action to retrieve a movie information from
[OMDB API](https://www.omdbapi.com)

## Use

```yml
  movie-info:
    runs-on: ubuntu-latest

    steps:
      -
        name: Retrieve movie info
        uses: belcebus/movie-info@v1
        with:
          movie-title: "The wizard of oz"
          api-key: ${{ secrets.TOKEN_API }}
```
The previous code will print the following text:

_Movie "The Wizard of Oz" directed by Victor Fleming, George Cukor, Mervyn
LeRoy, Norman Taurog, Richard Thorpe, King Vidor in 1939 with an IMDB score of
8.0. Plot: Dorothy Gale is swept away from a farm in Kansas to a magical land
of Oz in a tornado and embarks on a quest with her new friends to see the
Wizard who can help her return home to Kansas and help her friends as well._

And it will return the following action outputs:

* __movie-title__: "The Wizard of Oz"
* __movie-year__: 1939
* __movie-director__: "Victor Fleming, George Cukor, Mervyn LeRoy, Norman Taurog,
  Richard Thorpe, King Vidor"
* __movie-score__: 8.0
* __movie-plot__: "Dorothy Gale is swept away from a farm in..."

## Needs

[OMDB API](https://www.omdbapi.com) is still free to use, but you will need to
get an _API Key_ in order to retrieve information from its _API_. You can refer
to the [Generate API Key form](https://www.omdbapi.com/apikey.aspx) to create
your _API Key_.
