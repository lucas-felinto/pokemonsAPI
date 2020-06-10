const request = require('supertest')
const { expect } = require('chai')
const app = require('../../src/server')
const Pokemon = require('../../src/api/models/Pokemon')

describe('Pokemons', () => {
    let inputs

    beforeAll(() => {
        Pokemon.destroy({
            where: {},
            truncate: true
            }).then(function(){
            done()
        })
    })

    beforeEach(() => {
        inputs = {
            tipo: 'charizard',
            treinador: 'Lucas',
        }
    })

    describe('POST /pokemons', () => {
        it('should create a new pokemon', () => {
            return request(app)
            .post('/pokemons')
            .send(inputs)
            .expect(200)
            .then(() => {
                expect({
                    "id": 1,
                    "tipo": "charizard",
                    "treinador": "Lucas",
                    "nivel": 1
                })
            })
        })
    

        it('should create a pokemon setting nivel 1', () => {
            inputs.nivel = 5

            return request(app)
            .post('/pokemons')
            .send(inputs)
            .expect(200)
            .then(() => {
                expect({
                "id": 2,
                "tipo": "mewtwo",
                "treinador": "Lucas",
                "nivel": 1
            })
            })
        })

        it ('should return a error message when tipo its not correct', () => {
            return request(app)
            .post('/pokemons')
            .send({
                tipo: 'pokemon',
                treinador: 'Lucas',
            })
            .expect(400)
            .then(() => {
                expect("O tipo não pode ser diferente de charizard, mewtwo ou pikachu")
            })
        })
    })

    describe('GET /pokemons', () => {
        it('should get all pokemons', () => {
        return request(app)
        .get('/pokemons')
        .expect(200)
        })
    })

    describe('GET /pokemons/:id', () => {
        it('should get a specific pokemon by id', async () => {
            return request(app)
            .get('/pokemons/1')
            .expect(200)
            .then(() => {
                expect({
                "id": 1,
                "tipo": "charizard",
                "treinador": "Lucas",
                "nivel": 1
                })
            })
        })

        it('should return a error message when pokemon doesnt exists', () => {
        return request(app)
            .get('/pokemons/10')
            .expect(400)
            .then(() => {
            expect('O pokemon não pode ser encontrado')
            })
        })
    })

    describe('PUT /pokemons/:id', () => {
        it('should update the treinador', () => {
        return request(app)
        .put('/pokemons/2')
        .send({
            "tipo": "mewtwo",
            "treinador": "Ash" 
        })
        .expect(204)
        })
    })

    describe('DELETE /pokemons', () => {
        it('should delete a specific pokemon', async () => {
        return request(app)
            .delete('/pokemons/2')
            .expect(204)
            .then(async () => {
            const pokemons = await Pokemon.findAll()
            expect(pokemons).to.have.lengthOf(1)
            })
        })
    })

    Pokemon.create({
        tipo: "pikachu",
        treinador: "Lucas"
    })

    describe('POST /batalhar/:pokemonAId/:pokemonBId', () => {
        it('should respond with the winner and looser', () => {
            return request(app)
            .post('/batalhar/1/2')
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.a.property('vencedor')
                expect(res.body).to.have.a.property('perdedor')
            })
        })        
    })
})