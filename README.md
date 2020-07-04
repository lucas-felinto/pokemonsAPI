<p align="center">
     <img alt="pokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" width="300" heigth="250" />
     <img alt="pokemon" src="https://camo.githubusercontent.com/3a4297b1f842914d979c8ad299d4fb7dd9c46db0/687474703a2f2f6173736574732e706f6b656d6f6e2e636f6d2f6173736574732f636d73322f696d672f706f6b656465782f66756c6c2f3030312e706e67" width="150" heigth="250" />
  </p>
<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
  <a href="https://www.linkedin.com/in/lucas-felinto/" >
    <img alt="My Linkedin" src="https://img.shields.io/badge/lucasfelinto-%230077B5?style=social&logo=linkedin">
  </a>
</p>

<h4 align="center">  
     <a href="#pushpin-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
     <a href="#link-links">Links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
     <a href="#link-rocket">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
     <a href="#beginner-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
     <a href="#vertical_traffic_light-running-tests">Tests</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
     <a href="#license">License</a>
</h4>

## :pushpin: About

It's a simple but complete API containing a CRUD to register pokemons and an endpoint to battle registered pokemons. The battle contains an algorithm to distribute more chances to the higher level pokemon. Pokemons with same level have the same odds.

## :link: Links

API: <a href="https://pokemonsapi.herokuapp.com/">https://pokemonsapi.herokuapp.com/<a>  
Documentation: <a href="https://pokemonsapi.herokuapp.com/api-doc/">https://pokemonsapi.herokuapp.com/api-doc/<a>

## :rocket: Features
- [Node.js](https://nodejs.org/)
- [Sequelize](http://sequelize.org/)
- [JavaScript](https://www.javascript.com/)
- [MSSQL](https://www.npmjs.com/package/mssql)
- [Jest](https://jestjs.io/)
- [api-doc](https://apidocjs.com/)

## :beginner: Getting Started

- Clone the repository

``` git clone https://github.com/lucas-felinto/pokemonsAPI.git ```

Be sure to be at the project's root folder

- Install the dependences:

``` npm install ```

- Change the .env:

``` cp .env.example .env ```

``` nano .env ```

- Starting

In the development mode:

``` npm run dev ```

In the production mode:

``` npm run start ```

## :vertical_traffic_light: Running Tests

- Run all tests:

``` npm run test ``` 

- Run integration tests:

``` npm run test:integration ```

- Run unit tests:

``` npm run test:unit ```

## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
