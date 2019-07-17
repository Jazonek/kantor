// Redirect users if authenticated or not!

exports.redirectLogin = (req, res, next) => {
  next();
};
exports.redirectHome = (req, res, next) => {
  next();
};
exports.logout = async (req, res) => {
  res.redirect("/");
};
