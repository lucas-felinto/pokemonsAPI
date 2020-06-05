const Pokemon = require("../models/Pokemon")

module.exports = {
    async index (req, res) {
        const pokemons = await Pokemon.findAll()

        return res.status(200).json(pokemons)
    },
    async show (req, res) {
        const { id } = req.params
        const pokemon = await Pokemon.findByPk(id)
        
        if (!pokemon) {
            return res.status(400).json({message: 'O pokemon não pode ser encontrado'})
        }

        return res.status(200).json(pokemon)
    },
    async store (req, res) {
        const { tipo, treinador, nivel } = req.body
        const acceptedPokemons = ["mewtwo", "charizard", "pikachu"]

        if (!acceptedPokemons.find(pokemon => pokemon === tipo)) {
            return res.status(400).json({message: "O tipo não pode ser diferente de charizard, mewtwo ou pikachu"})
        }

        const pokemon = await Pokemon.create({
            tipo,
            treinador,
            nivel: 1
        })

        return res.status(200).json(pokemon)
    }, 
    async put (req, res) {
        const { id } = req.params
        const { treinador } = req.body

        await Pokemon.update({ treinador: treinador }, { where: { id } }) 

        return res.status(204).json({ message: "Treinador atualizado"})
    }, 
    async delete (req, res) {
        const { id } = req.params
        await Pokemon.destroy({ where: { id } })

        return res.status(204)
    }
}