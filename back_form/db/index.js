const Sequalize = require('sequelize');
const sequelize = new Sequalize('React_Form', 'root', '', {
    dialect: "mysql",
    host: "127.0.0.1",

});

const Messages = require('./MessageUsers')(sequelize);

module.exports = {
    sequelize: sequelize,
    Messages: Messages
}