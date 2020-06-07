const Pokemon = require('../models/Pokemon')
const sequelize = require('../database')

module.exports = {
    async battle (req, res, next) {
        const t = await sequelize.transaction()

        //Updating Pokemon's level after battle
        const levelUpdate = async function (pokemonWinner, pokemonLooser) {
            pokemonWinner.nivel += 1
            await pokemonWinner.save({ transaction: t })

            pokemonLooser.nivel -= 1
            if (pokemonLooser.nivel === 0) {
                await pokemonLooser.destroy({ transaction: t })
            } else {
                await pokemonLooser.save({ transaction: t })
            }
            await t.commit()
        }

        try {
            const { pokemonAId, pokemonBId } = req.params
            const pokemonA = await Pokemon.findByPk(pokemonAId)
            const pokemonB = await Pokemon.findByPk(pokemonBId)

            const battleArena = [pokemonA, pokemonB]

            if (!pokemonA || !pokemonB) res.status(404).json({error: 'Pokemon não encontrado'})
            
            //Same Level Battle
            if (pokemonA.nivel === pokemonB.nivel) {
                const pokemonWinner = battleArena[Math.floor(Math.random() * 2)]
                const pokemonLooser = pokemonWinner.id === pokemonA.id ? pokemonB : pokemonA

                levelUpdate(pokemonWinner, pokemonLooser)

                return res.send({"vencedor": pokemonWinner, "perdedor": pokemonLooser})
            } else {
                //Different Level Battle
                const differentLevelBattle = async function (higherLevelPokemon, lowestLevelPokemon) {
                    // Set the odds and get a random number between 1 and 100 to pick the winner 
                    var randomNumber = (Math.floor(Math.random() * 100) + 1)
                    const higherLevelChances = 66
                
                    if (randomNumber <= higherLevelChances) {
                        //Higher Level Pokemon Wins
                        levelUpdate(higherLevelPokemon, lowestLevelPokemon)

                        return res.send({"vencedor": higherLevelPokemon, "perdedor": lowestLevelPokemon})
                    } else {
                        //Lower Level Pokemon Wins 
                        levelUpdate(lowestLevelPokemon, higherLevelPokemon)
                        
                        return res.send({"vencedor": lowestLevelPokemon, "perdedor": higherLevelPokemon})
                    }
                }

                //Setting the pokemons to battle
                if (pokemonA.nivel > pokemonB.nivel) {
                    const higherLevelPokemon = pokemonA
                    const lowestLevelPokemon = pokemonB

                    differentLevelBattle(higherLevelPokemon, lowestLevelPokemon)
                } else if (pokemonB.nivel > pokemonA.nivel) {
                    const higherLevelPokemon = pokemonB
                    const lowestLevelPokemon = pokemonA

                    differentLevelBattle(higherLevelPokemon, lowestLevelPokemon)
                }
            }   
        } catch (error) {
            await t.rollback()
            next(error)
        }
    }
}