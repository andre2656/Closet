const router = require("express").Router();
const Chat = require("../../controllers/Chat");
const db = require("../../models");

router.post("/send", (req, res) => {
    db.Chat.create({
        email: req.body.email,
        message: req.body.message,
        user: req.body.user
    }).then(() => {
        // console.log('Message Added!');
        // res.json({ message: "message Saved" });
        db.Chat.findAll({
            where: { email: req.body.email }
        }).then(messages => {
            res.json(messages)
        })
    })
});
router.get('/receive', (req, res) => {
    db.Chat.findAll({
        where: {email: req.query.email}
    }).then(messages => {
        console.log(messages)
        res.json(messages)
    })
})

router.get('/stylist', (req, res) => {
    db.Chat.findAll().then(emails => {
        res.json(emails)
    })
})

module.exports = router;