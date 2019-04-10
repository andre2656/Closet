'use strict';
module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define('Settings', {
        email: DataTypes.STRING,
        ageRange: DataTypes.STRING,
        ethnicity: DataTypes.STRING,
        hairColor: DataTypes.STRING,
        style: DataTypes.STRING,
        wardrobe: DataTypes.STRING
    }, {});
    Settings.associate = function (models) {

    }
    return Settings;
};