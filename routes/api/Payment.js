const router = require("express").Router();
const Payment = require("../../controllers/Payment");
const db = require("../../models");

router.post("/payments", (req, res) => {
    db.Payment.create({
        cardholderName: req.body.cardholderName,
        cvv: req.body.cvv,
        cardNumber: req.body.cardNumber,
        month: req.body.month,
        year: req.body.year,
    }).then(() => {
        console.log('Settings Added!')
        res.json({ message: "Card Saved" });
    })
});


module.exports = router;