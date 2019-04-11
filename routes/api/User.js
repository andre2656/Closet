const router = require("express").Router();
const User = require("../../controllers/Users.js");
const db = require("../../models");

router.post("/sign-up", (req, res) => {
    db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            premium: req.body.premium})
        .then(dbModel => {
            console.log(dbModel);
            console.log('User Added!')
            res.json({message: "User Saved"});
        });
});

module.exports = router;