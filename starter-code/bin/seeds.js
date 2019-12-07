const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

const dbName = "lab-mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`).catch(err => next(err));

const celebrities = [
  {
    name: "Jason Statham",
    occupation: "Actor",
    catchPhrase:"Looking good and feeling good go hand in hand."
  },
  {
    name: "Linkin Park",
    occupation: "Singer",
    catchPhrase: "Help me leave behind some reasons to be missed"
  },
  {
    name: "Macron",
    occupation: "President",
    catchPhrase: "Ensemble, la France"
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
}); 