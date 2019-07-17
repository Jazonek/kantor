const fetch = require("node-fetch");
//Proxy
exports.currency = async (req, res) => {
  const url = "http://webtask.future-processing.com:8068/currencies";
  const currency_response = await fetch(url);
  const currency_data = await currency_response.json();

  res.send(currency_data);
};
