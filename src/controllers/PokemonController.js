const Pokemon = require("../models/Pokemon")

module.exports = {
    async store (req, res) {
        const { tipo, treinador, nivel } = req.body

        // if (req.body.tipo != "charizard" || "mewtwo" || "pikachu") {
        //     return res.status(400).json({message: 'O tipo não pode ser diferente de charizard, mewtwo ou pikachu'})
        // }

        const pokemon = await Pokemon.create({
            tipo,
            treinador,
            nivel: 1
        })

        return res.status(200).json(pokemon)
    }
}