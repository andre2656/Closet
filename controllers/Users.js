const db = require("../models");

module.exports = {
    createUser: function (req, res) {
        db.Users.Create({
                firstName: req.firstname,
                lastName: req.lastname,
                email: req.email,
                password: req.password,
                premium: req.premium
            })
            .then(dbModel => {
                res.json(dbModel);
            });
    }
};