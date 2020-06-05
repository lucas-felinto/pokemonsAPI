module.exports = {
    database: 'Desafio-jz',
    username: 'DesafioAdmin',
    password: 'Picachu123',
    host: 'jzd-dev-desafio.database.windows.net',
    port: '1433',
    dialect: 'mssql',
    dialectOptions: { 
        options: {
          encrypt: true,
          schema: 'LUCAS'
        }
      }
}