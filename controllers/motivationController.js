const db = require("../models");

module.exports = {
   findAll: function (req, res) {
      db.MotivationalQuotes
         .findAll({})
         .then(dbModel => {
            res.json(dbModel);
         });
   }
};