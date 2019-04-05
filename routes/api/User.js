const router = require("express").Router();
const User = require("../../controllers/Users.js");
const db = require("../../models");

// Matches with "/api/motivation"
// You can test this route at http://localhost:3001/api/motivation/
router.route("/")
    .get(User.findAll)

// You can test this route at http://localhost:3001/api/daily/
router.route("/sign-up").post((req, res) => {
    db.Users
        .Create({})
        .then(dbModel => {
            console.log(dbModel)
        });
})

router.route("/settings")
    .post(User.create({
        
    }))

module.exports = router;