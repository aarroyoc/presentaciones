const Sequelize = require("sequelize");
const config = require("./config.json");

const sequelize = new Sequelize({
    dialect: "postgres",
    username: config.connection.user,
    password: config.connection.password,
    host: config.connection.host,
    database: config.connection.database
});

module.exports = sequelize;
