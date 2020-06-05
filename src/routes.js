const express = require("express")
const PokemonController = require("./controllers/PokemonController")

const routes = express.Router()

routes.get("/pokemons", PokemonController.index)
routes.get("/pokemons/:id", PokemonController.show)
routes.post("/pokemons", PokemonController.store)
routes.put("/pokemons/:id", PokemonController.put)
routes.delete("/pokemons/:id", PokemonController.delete)

module.exports = routes