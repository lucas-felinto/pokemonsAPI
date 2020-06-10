const express = require('express')
const PokemonController = require('../src/api/controllers/PokemonController')
const BattleController = require('../src/api/controllers/BattleController')

const routes = express.Router()

routes.get('/pokemons', PokemonController.index)

 /**
   * @api {get} pokemons Get all pokemons
   * @apiVersion 0.1.0
   * @apiName GetAllPokemons
   * @apiGroup Pokemons
   *
   * @apiSuccessExample {json} Sucesso
   *   [{
   *     "id": 1,
   *     "tipo": "pikachu",
   *     "treinador": "Thiago",
   *     "nivel": 1
   *   }, {
   *     "id": 2,
   *     "tipo": "charizard",
   *     "treinador": "Renato",
   *     "nivel": 1
   *   }]
*/

routes.get('/pokemons/:id', PokemonController.show)

 /**
   * @api {get} pokemons Get a specific pokemon
   * @apiVersion 0.1.0
   * @apiName GetPokemon
   * @apiGroup Pokemons
   *
   * @apiSuccessExample {json} Sucesso
   *   {
   *     "id": 1,
   *     "tipo": "pikachu",
   *     "treinador": "Thiago",
   *     "nivel": 1
   *   }
*/

routes.post('/pokemons', PokemonController.store)

 /**
   * @api {post} pokemons Store a new pokemon
   * @apiVersion 0.1.0
   * @apiName StorePokemon
   * @apiGroup Pokemons
   *
   * @apiSuccessExample {json} Sucesso
   *   {
   *     "id": 1,
   *     "tipo": "pikachu",
   *     "treinador": "Thiago",
   *     "nivel": 1
   *   }
*/

routes.put('/pokemons/:id', PokemonController.put)

 /**
   * @api {put} pokemons Update the treinador of a specific pokemon
   * @apiVersion 0.1.0
   * @apiName UpdatePokemon
   * @apiGroup Pokemons
   *
   * @apiSuccess (No Content 204) Pokemon Updated
*/

routes.delete('/pokemons/:id', PokemonController.delete)

 /**
   * @api {delete} pokemons Delete a specific pokemon
   * @apiVersion 0.1.0
   * @apiName DeletePokemon
   * @apiGroup Pokemons
   *
   * @apiSuccess (No Content 204) Pokemon Deleted
*/

routes.post('/batalhar/:pokemonAId/:pokemonBId', BattleController.battle)

 /**
   * @api {post} pokemons Pokemon's Battle
   * @apiVersion 0.1.0
   * @apiName PokemonsBattle
   * @apiGroup Pokemons
   *
   * @apiSuccessExample {json} Sucesso
   *   {
   *     "vencedor": {
   *       "id": 1,
   *       "tipo": "pikachu",
   *       "treinador": "Thiago",
   *       "nivel": 2
   *     },
   *     "perdedor": {
   *       "id": 2,
   *       "tipo": "mewtwo",
   *       "treinador": "Lucas",
   *       "nivel": 0
   *     }
   *   }
   *
*/

module.exports = routes