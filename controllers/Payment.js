const db = require("../models");

module.exports = {
    createPayment: function (req, res) {
        db.Users.Create({
            cardholderName: req.body.cardholderName,
            cvv: req.body.cvv,
            cardNumber: req.body.cardNumber,
            month: req.body.month,
            year: req.body.year
        })
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel)
            });
    }
};