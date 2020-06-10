define({ "api": [
  {
    "type": "delete",
    "url": "pokemons",
    "title": "Delete a specific pokemon",
    "version": "0.1.0",
    "name": "DeletePokemon",
    "group": "Pokemons",
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Pokemon",
            "description": "<p>Deleted</p>"
          }
        ]
      }
    },
    "filename": "./src/routes.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "get",
    "url": "pokemons",
    "title": "Get all pokemons",
    "version": "0.1.0",
    "name": "GetAllPokemons",
    "group": "Pokemons",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "[{\n  \"id\": 1,\n  \"tipo\": \"pikachu\",\n  \"treinador\": \"Thiago\",\n  \"nivel\": 1\n}, {\n  \"id\": 2,\n  \"tipo\": \"charizard\",\n  \"treinador\": \"Renato\",\n  \"nivel\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "get",
    "url": "pokemons",
    "title": "Get a specific pokemon",
    "version": "0.1.0",
    "name": "GetPokemon",
    "group": "Pokemons",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "{\n  \"id\": 1,\n  \"tipo\": \"pikachu\",\n  \"treinador\": \"Thiago\",\n  \"nivel\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "post",
    "url": "pokemons",
    "title": "Pokemon's Battle",
    "version": "0.1.0",
    "name": "PokemonsBattle",
    "group": "Pokemons",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "{\n  \"vencedor\": {\n    \"id\": 1,\n    \"tipo\": \"pikachu\",\n    \"treinador\": \"Thiago\",\n    \"nivel\": 2\n  },\n  \"perdedor\": {\n    \"id\": 2,\n    \"tipo\": \"mewtwo\",\n    \"treinador\": \"Lucas\",\n    \"nivel\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "post",
    "url": "pokemons",
    "title": "Store a new pokemon",
    "version": "0.1.0",
    "name": "StorePokemon",
    "group": "Pokemons",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "{\n  \"id\": 1,\n  \"tipo\": \"pikachu\",\n  \"treinador\": \"Thiago\",\n  \"nivel\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "Pokemons"
  },
  {
    "type": "put",
    "url": "pokemons",
    "title": "Update the treinador of a specific pokemon",
    "version": "0.1.0",
    "name": "UpdatePokemon",
    "group": "Pokemons",
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Pokemon",
            "description": "<p>Updated</p>"
          }
        ]
      }
    },
    "filename": "./src/routes.js",
    "groupTitle": "Pokemons"
  }
] });
