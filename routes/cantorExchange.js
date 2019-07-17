const express = require("express");
const router = express.Router();

const cantorExchange = require("../controllers/cantorExchange");
const redirects = require("../controllers/redirects");
const api = require("../controllers/api");

router.post("/login", redirects.redirectHome, cantorExchange.loginPost);
router.post("/register", redirects.redirectHome, cantorExchange.registerPost);
router.post("/user", redirects.redirectLogin, cantorExchange.updateUser);
router.post(
  "/wallet",
  redirects.redirectLogin,
  cantorExchange.updateUserWallet
);
router.post("/logout", redirects.redirectLogin, redirects.logout);

router.get("/", redirects.redirectHome, cantorExchange.loginPage);
router.get("/register", redirects.redirectHome, cantorExchange.registerPage);
router.get("/home", redirects.redirectLogin, cantorExchange.homePage);
router.get("/user", redirects.redirectLogin, cantorExchange.userPanel);

router.get("/currency", api.currency);

module.exports = router;
