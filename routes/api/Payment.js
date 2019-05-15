const router = require("express").Router();
const Payment = require("../../controllers/Payment");
const db = require("../../models");
// const stripe = require("stripe")("sk_test_Z0pBJjfsDeS7oveij5bkKQZK00rUl2BdOQ");
router.post("/payments", (req, res) => {
    db.Payment.create({
        email: req.body.email,
        cardholderName: req.body.cardholderName,
        cvv: req.body.cvv,
        cardNumber: req.body.cardNumber,
        month: req.body.month,
        year: req.body.year,
    }).then(() => {
        res.json({ message: "Card Saved" });
    })
});
router.get('/premium', (req, res) => {
    db.Payment.findAll({
        where: { email: req.query.email }
    }).then(premium => {
        if (!premium){
            res.json(premium)
        }else{
            res.json(premium)
        }
        
    })
})
// router.get('/stripe/payment', (req,res) => {
//     // stripe.charges.create({
//     //     amount: 2000,
//     //     currency: "usd",
//     //     source: "tok_mastercard", // obtained with Stripe.js
//     //     description: "Charge for jenny.rosen@example.com"
//     // }, {
//     //         idempotency_key: "FYNlgkDbJrSGhL42"
//     //     }, function (err, charge) {
//     //         // asynchronously called
//     //     });

//     // stripe.charges.create({
//     //     amount: 2000,
//     //     currency: "usd",
//     //     source: "tok_visa", // obtained with Stripe.js
//     //     metadata: { 'order_id': '6735' }
//     // });
// })



module.exports = router;