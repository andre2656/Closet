const db = require("../models");

module.exports = {
    createSettings: function (req, res) {
        db.Chat.Create({
            email: req.body.email,
            message: req.body.message,
            user: req.body.user
        })
            .then(dbModel => {
                res.json(dbModel);
            });
    }
};