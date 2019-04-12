const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
function setupSequelizeSessionStore() {
  // initalize sequelize with session store
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const sessionStore = new SequelizeStore({
    db: db.sequelize
  });
  sessionStore.sync();

  app.set('trust proxy', 1);
  app.use(session({
    secret: 'UCLA ROX',
    resave: false,
    saveUninitialized: true,
    store: sessionStore
  }));
}

setupSequelizeSessionStore();

// Define middleware here
app.use(cookieParser());

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
  });
});