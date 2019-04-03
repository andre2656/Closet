const db = require("../models");

// This file empties the books collection and inserts the books below

const motivationSeed = [
  {
    quote: "I believe in you."
  },
  {
    quote: "You can do this!"
  },
  {
    quote: "Believe in yourself."
  },
  {
    quote: "You're almost there!"
  },
  {
    quote: "You're a real developer now."
  },
  {
    quote: "You can do anything you put your mind to."
  },
  {
    quote: "Never quit!"
  },
  {
    quote: "Keep it up!"
  },
  {
    quote: "Never surrender!"
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.MotivationalQuotes.destroy({
    where: {},
    truncate: true
  })
  .then(() => db.MotivationalQuotes.bulkCreate(motivationSeed));
});