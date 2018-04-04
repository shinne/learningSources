import '../css/main.scss';
const greeter = require("./greeter");
var { es6 } = {es6:"I am a es6"};
console.log(es6);
document.querySelector("#root").appendChild(greeter());