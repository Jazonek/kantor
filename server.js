const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
//Connect to mongoDB from other file "db.js"
// const db = require("./db");

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

const cantorExchange = require("./routes/cantorExchange");

// db.connect(err => {
//   if (err) {
//     console.log("Unable to connect to database");
//     process.exit(1);
//   } else {
//     console.log("Connected to database");
//   }
// });

//ROUTES
app.use(cantorExchange);

app.listen(port, () => {
  console.log("App listening on " + port + "\nMay Node will be with you");
});
