const router = require("express").Router();
const User = require("../../controllers/Users.js");
const db = require("../../models");

// Matches with "/api/motivation"
// You can test this route at http://localhost:3001/api/motivation/
// router.route("/")
//     .get(User.findAll)

// You can test this route at http://localhost:3001/api/daily/
router.post("/sign-up", (req, res) => {
    db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            premium: req.body.premium})
        .then(dbModel => {
            console.log(dbModel)
        });
});

module.exports = router;