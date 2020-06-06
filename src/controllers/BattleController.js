const Pokemon = require("../models/Pokemon")
const sequelize = require("../database")

module.exports = {
    async battle (req, res, next) {
        const t = await sequelize.transaction()
        try {
            const { pokemonAId, pokemonBId } = req.params
            const pokemonA = await Pokemon.findByPk(pokemonAId)
            const pokemonB = await Pokemon.findByPk(pokemonBId)

            const battleArena = [pokemonA, pokemonB]

            if (!pokemonA || !pokemonB) res.status(404).json({error: "Pokemon não encontrado"})

            if (pokemonA.nivel == pokemonB.nivel) {
                const pokemonWinner = battleArena[Math.floor(Math.random() * 2)]
                const pokemonLooser = pokemonWinner.id === pokemonA.id ? pokemonB : pokemonA

                pokemonWinner.nivel += 1
                await pokemonWinner.save({ transaction: t })

                pokemonLooser.nivel -= 1
                if (pokemonLooser.nivel === 0) {
                    await pokemonLooser.destroy({ transaction: t })
                } else {
                    await pokemonLooser.save({ transaction: t })
                }

                await t.commit()

                return res.send({ pokemonWinner, pokemonLooser })
            }   
        } catch (error) {
            await t.rollback()
            next(error)
        }
    }
}