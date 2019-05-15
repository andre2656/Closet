const db = require("../models");

module.exports = {
    createSettings: function (req, res) {
        db.Settings.Create({
            email: req.body.email,
            ageRange: req.body.ageRange,
            ethnicity: req.body.ethnicity,
            hairColor: req.body.hairColor,
            style: req.body.style,
            wardrobe: req.body.wardrobe,
        })
            .then(dbModel => {
                res.json(dbModel);
            });
    }
};