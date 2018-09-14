var text = require("../../../mock/home.json");
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = text.greetText;
    return greet;
}