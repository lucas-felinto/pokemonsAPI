const express = require('express')
const PokemonController = require('../src/api/controllers/PokemonController')
const BattleController = require('../src/api/controllers/BattleController')

const routes = express.Router()

routes.get('/pokemons', PokemonController.index)
routes.get('/pokemons/:id', PokemonController.show)
routes.post('/pokemons', PokemonController.store)
routes.put('/pokemons/:id', PokemonController.put)
routes.delete('/pokemons/:id', PokemonController.delete)
routes.post('/batalhar/:pokemonAId/:pokemonBId', BattleController.battle)


module.exports = routes