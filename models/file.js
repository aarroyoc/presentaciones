const Sequelize = require("sequelize");
const db = require("../db");

var File = db.define("file",{
    file: {
        type: Sequelize.STRING(1024),
        allowNull: false
    },
    torrent: {
        type: Sequelize.STRING(1024),
        allowNull: false
    },
    downloads: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
},{
    timestamps: false,
    tableName: "files",
    engine: "MYISAM"
});

module.exports = File;