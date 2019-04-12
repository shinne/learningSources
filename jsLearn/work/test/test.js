/*
(function(){
    var a = b = 6
})()
console.log(a)
console.log(b)
*/

var test = function (a) {
    console.log(a)
}

test.bind(window)