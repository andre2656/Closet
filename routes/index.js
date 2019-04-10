const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  if (process.env.NODE_ENV === 'production'){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }else{
    console.log('Invalid route, ', req.url)
    res.send('Invalid route, ' + req.url)
  }
  
});

module.exports = router;
