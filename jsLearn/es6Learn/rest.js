function sortNumbers(){
/*    console.log(arguments[0]);
    console.log(arguments);*/
    console.log(Array.prototype.slice.call(arguments));
    return Array.prototype.slice.call(arguments).sort();
}

sortNumbers("a","b","c");
const sortNumbers = (...numbers) => numbers.sort();

var test = {
    'length':3,
    '2':"a",
    '13':"b",
    '24':"c"
}
var res = Array.prototype.slice.call(test);
console.log(res);