const router = require("express").Router();
const User = require("../../controllers/Users.js");
const db = require("../../models");
const authMiddleware = require("./authMiddleware");
const bcrypt = require('bcrypt');



router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find the user in the database
    db.User.findOne({ where: { email: email } }).then(
        user => {
            console.log(user)
            try {
                if (!user) {
                    throw new Error("email not found");
                }

                // See if the password hash matches what we have in the database
                if (!bcrypt.compareSync(password, user.password)) {
                    throw new Error("Password invalid");
                }

                // This is not super secure, but a random token is all we need right now.
                const authToken = Math.random();

                // Now do two things
                //  1. Set the user information in our session. This gets stored in the db.
                //  2. Set the user information in our cookie. This gets stored on the client side.
                // When the client sends another request to the server, 
                //  we with validate that the session and cookie info match using authMiddleware

                // Update session with our auth info      
                req.session.user_id = user.id;
                req.session.auth_token = authToken;

                // Send back cookie
                res.cookie("user_id", user.id);
                res.cookie("auth_token", authToken);

                // Good to go, let the client know
                res.json({ user: user });
            } catch (err) {
                console.log(err)
                res.status(401).json({ error: err.message });
            }
        }
    )
});

router.post("/sign-up", (req, res) => {
    const password = req.body.password;

    console.log("registering");

    // TODO: Validate username & password. Make sure they're long enough / secure enough

    // Hash password so nobody can look at the database and get your password
    let passHash = bcrypt.hashSync(password, 10);

    // Store new user in the database
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: passHash,
        premium: req.body.premium
    }).then(user => {
        if (!user) {
            res.status({ error: "Error creating user in database" });
            return;
        }

        // Don't authenticate just yet, just tell the client this worked ok.
        res.json({ success: true });
    });
})
// router.post("/sign-up", (req, res) => {
//     db.User.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password,
//         premium: req.body.premium
//     })
//         .then(dbModel => {
//             console.log(dbModel);
//             console.log('User Added!')
//             res.json({ message: "User Saved" });
//         });
// });

router.post("/logout", (req, res) => {
    // Destroy the session so there's no longer any user data held
    //  A new session will be generated for the user on their next request
    req.session.destroy();

    // Clear our auth cookies
    res.clearCookie("user_id");
    res.clearCookie("auth_token");

    res.json({ success: true });
})

router.get("/getUser", authMiddleware, (req, res) => {
    db.User.findOne({ where: { id: req.session.user_id } }).then(user => {
        // This either worked, or we'll send down null. 
        res.send({ user: user });
    })
});

module.exports = router;