// const db = require("../db");
const Datastore = require("nedb");
const bcrypt = require("bcrypt");
const users = new Datastore("users.db");
users.loadDatabase();

//POST
exports.registerPost = async (req, res) => {
  const { name, surname, password, email, currency, amount } = req.body;
  if (!name || !surname || !email || !currency || !amount || !password) {
    res.status(404).send("Fill all empty fields");
  } else if (amount < 1) {
    res.status(404).send("Set proper amount!");
  } else {
    try {
      //TODO: insert user to users collection
      //TODO: hash password
      const hash = await bcrypt.hashSync(password, 10);
      const user = {
        email: email,
        password: hash,
        person: {
          name: name,
          surname: surname
        },
        wallet: {
          amount: amount,
          currency: currency
        }
      };
      console.log(user);
      users.insert(user);
    } catch (err) {
      res.status(500).send("Try again later");
    }
    res.status(200).send("Registered successfully");
  }
};
exports.loginPost = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).send("Fill all empty fields");
  } else {
    try {
      if (bcrypt.compareSync(password, passwdFromDb)) {
        // Passwords match
      } else {
        // Passwords don't match
      }
      //TODO: Check if usser exists and if password is correct
    } catch (err) {
      res.status(500).send("Try again later");
    }
    res.redirect("/home");
  }
};
exports.updateUser = async (req, res) => {
  //TODO: Update exisitng user
};
exports.updateUserWallet = async (req, res) => {
  //TODO: Update wallet of exisitng user
};
//GET
exports.loginPage = (req, res) => {
  res.render("login");
};
exports.registerPage = (req, res) => {
  res.render("register");
};
exports.homePage = (req, res) => {
  res.render("home");
};
exports.userPanel = (req, res) => {
  users.find({}, (err, data) => {
    //FIXME: Change to display data only about logged user
    if (err) {
      response.end();
      return;
    }
    console.log(data);
  });
  res.render("userPanel");
};
