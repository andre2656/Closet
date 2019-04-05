const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Users
            .Create({
                firstName: req.firstname,
                lastName: req.lastname,
                email: req.email,
                password: req.password,
                premium: req.premium,
                ageRange: req.ageRange,
                ethnicity: req.ethnicity,
                hairColor: req.hairColor,
                style: req.style,
                wardrobe: req.wardrobe,
            })
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel)
            });
    }
};