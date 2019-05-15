const router = require("express").Router();
const Settings = require("../../controllers/Settings");
const db = require("../../models");

router.post("/settings", (req, res) => {
    db.Settings.create({
        email: req.body.email,
        ageRange: req.body.age,
        ethnicity: req.body.ethnicity,
        hairColor: req.body.hairColor,
        style: req.body.style,
        wardrobe: req.body.wardrobe,
    }).then(() => {
        res.json({message: "Settings Saved"});
    })
})

router.get('/ethnicity', (req,res) => {
    db.Settings.findOne({ 
        where: {email: req.query.email}
    }).then(settings => {
        res.json(settings)
    })
})




module.exports = router;