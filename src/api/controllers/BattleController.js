const Pokemon = require('../models/Pokemon')
const sequelize = require('../database')
const { levelUpdate } = require('../utils/battle')

module.exports = {
    async battle (req, res) {
        const t = await sequelize.transaction()
        try {
            const { pokemonAId, pokemonBId } = req.params
            const pokemonA = await Pokemon.findByPk(pokemonAId)
            const pokemonB = await Pokemon.findByPk(pokemonBId)

            if (!pokemonA || !pokemonB) res.status(404).json({error: 'Pokemon não encontrado'})
            
            //Same Level Battle
            if (pokemonA.nivel === pokemonB.nivel) {
                const battleArena = [pokemonA, pokemonB]
                const pokemonWinner = battleArena[Math.floor(Math.random() * 2)]
                const pokemonLooser = pokemonWinner.id === pokemonA.id ? pokemonB : pokemonA

                await levelUpdate(pokemonWinner, pokemonLooser)

                return res.send({"vencedor": pokemonWinner, "perdedor": pokemonLooser})
            } else {
                //Different Level Battle
                const differentLevelBattle = async (higherLevelPokemon, lowestLevelPokemon) => {
                // Set the odds and get a random number between 1 and 100 to pick the winner 
                var randomNumber = (Math.floor(Math.random() * 100) + 1)
                const higherLevelChances = 66

                if (randomNumber <= higherLevelChances) {
                    //Higher Level Pokemon Wins
                    await levelUpdate(higherLevelPokemon, lowestLevelPokemon)

                    return res.send({"vencedor": higherLevelPokemon, "perdedor": lowestLevelPokemon})
                } else {
                    //Lower Level Pokemon Wins 
                    await levelUpdate(lowestLevelPokemon, higherLevelPokemon)

                    return res.send({"vencedor": lowestLevelPokemon, "perdedor": higherLevelPokemon})
                    }
                }
                //Setting the pokemons to battle
                pokemonA.nivel > pokemonB.nivel ? differentLevelBattle(pokemonA, pokemonB) : differentLevelBattle(pokemonB, pokemonA)
            }
        } catch (error) {
            await t.rollback()
            console.log(error)
        }
    }
}

module.exports = { randomNumber }