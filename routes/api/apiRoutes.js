const axios = require("axios");
const router = require("express").Router();

router.get("/pins", (req, res) => {
    axios
        .get("https://www.pinterest.com/<username>/feed.rss", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;