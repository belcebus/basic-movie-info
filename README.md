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

## Needs

[OMDB API](https://www.omdbapi.com) is still free to use, but you will need to
get an _API Key_ in order to retrieve information from its _API_. You can refer
to the [Generate API Key form](https://www.omdbapi.com/apikey.aspx) to create
your _API Key_.
