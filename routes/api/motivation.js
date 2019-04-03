const router = require("express").Router();
const motivationController = require("../../controllers/motivationController");
const db = require("../../models");

// Matches with "/api/motivation"
// You can test this route at http://localhost:3001/api/motivation/
router.route("/")
  .get(motivationController.findAll)

// You can test this route at http://localhost:3001/api/daily/
router.route("/daily").get((req, res) => {
  db.MotivationalQuotes
    .findAll({})
    .then(dbModel => {
      let rand = Math.floor(Math.random() * dbModel.length);
      
      res.json(dbModel[rand]);
    });
})

module.exports = router;
