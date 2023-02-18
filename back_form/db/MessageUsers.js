const Sequalize = require('sequelize');

module.exports = function (sequelize){
    return sequelize.define('Messages', {
        id: {
            type: Sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: Sequalize.STRING,
            allowNull: false
        },

        mail: {
            type: Sequalize.STRING,
            allowNull: false
        },

        massege: {
            type: Sequalize.STRING,
            allowNull: false
        }

    }, {timestamps: false,
        tableName: 'Message_from_users'
    });
}