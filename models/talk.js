const Sequelize = require("sequelize");
const db = require("../db");
const File = require("./file");

var Talk = db.define("talk",{
    name: {
        type: Sequelize.STRING(512),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    embed: {
        type: Sequelize.TEXT,
        allowNull: true
    }
},{
    timestamps: true,
    paranoid: false,
    tableName: "talks",
    engine: "MYISAM"
});

Talk.belongsTo(File,{
    foreignKey: "file_id",
});

module.exports = Talk;