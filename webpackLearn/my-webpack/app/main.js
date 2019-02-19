const greeter = require('./greeter')
const greetText = require('./greetText.json')
import es6test from './es6test.js'

document.querySelector('#root').appendChild(greeter())

var text = document.querySelector('#text').appendChild(greeter())
text.innerHTML = greetText.greetText

const {test1,test2} = es6test
console.log("es6的解构赋值")
console.log(test1,test2)
console.log('hihihihisdfdsfddffhihi')

console.log('dddd')
