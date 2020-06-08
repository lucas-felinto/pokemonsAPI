const sequelize = require('../database')

//Updating pokemon's level after battle
const levelUpdate = async (pokemonWinner, pokemonLooser) => {
    const t = await sequelize.transaction()

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

module.exports = { levelUpdate }