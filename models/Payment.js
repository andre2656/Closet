'use strict';
module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
        email: DataTypes.STRING,
        cardholderName: DataTypes.STRING,
        cvv: DataTypes.STRING,
        cardNumber: DataTypes.STRING,
        month: DataTypes.STRING,
        year: DataTypes.STRING,
    }, {});
    Payment.associate = function (models) {

    }
    return Payment;
};