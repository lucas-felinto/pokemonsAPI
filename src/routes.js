const express = require("express")
const PokemonController = require("./controllers/PokemonController")

const routes = express.Router()

routes.post("/pokemons", PokemonController.store)

module.exports = routes