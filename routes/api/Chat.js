const router = require("express").Router();
const Chat = require("../../controllers/Chat");
const db = require("../../models");

router.post("/send", (req, res) => {
    db.Chat.create({
        email: req.body.email,
        message: req.body.message,
        user: req.body.user
    }).then(() => {
        console.log('Message Added!');
        res.json({ message: "message Saved" });
    })
});
router.get('/recieve', (req, res) => {
    db.Chat.findAll({
        where: {email: req.params.email}
    }).then(messages => {
        console.log(messages)
        res.json(messages)
    })
})


module.exports = router;