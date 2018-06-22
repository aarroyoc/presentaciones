const Sequelize = require("sequelize");

/* 

Modify according to your MariaDB settings. This is just for automated testing

*/
const sequelize = new Sequelize("presentaciones","presentaciones-test","presentaciones-test",{
    dialect: "mysql",
    host: "localhost", 
  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

module.exports = sequelize;
