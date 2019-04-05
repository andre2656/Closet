'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        premium: DataTypes.BOOLEAN,
        ageRange: DataTypes.STRING,
        ethnicity: DataTypes.STRING,
        hairColor: DataTypes.STRING,
        style: DataTypes.STRING,
        wardrobe: DataTypes.STRING,
    }, {});
    return User;
};