'use strict';
module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        email: DataTypes.STRING,
        message: DataTypes.STRING,
        user: DataTypes.BOOLEAN
    }, {});
    Chat.associate = function (models) {

    }
    return Chat;
};