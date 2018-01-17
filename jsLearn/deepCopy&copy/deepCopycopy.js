var extendCopy = function (p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    return c;
}
var dog = {
    foot:{
        left:"left",
        right:"right",
        top:"top",
        bottom:"bottom"
    },
    head:1
};

var animal = {
    foot:{
        left:"left",
        right:"right",
    },
    head:2
};

var dog = extendCopy(animal);
console.log(dog);
console.log("以上是原始的dog");
animal["foot"]["top"] = "top";
animal["foot"]["bottom"] = "bottom";
animal["head"] = 9;

console.log("修改了animal的foot，dog的foot也会进行修改");
console.log("因为进行了这是浅拷贝，在复制的对象属性有object的情况下，只会将其指向内存地址的指针进行复制");
console.log(dog);
console.log(animal);


console.log("下面是进行深度拷贝");
var deepCopy = function deepopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}


var copy = {
    key:[1,2,3,5],
    value:{
        k:"v"
    }
};
var prev = deepCopy(copy);
console.log(prev);
console.log(copy);
copy["key"].push(4);
console.log('由于是进行的深度拷贝，是直接开辟新地址容纳新的数据，因此修改其中的object属性，另一个不会受到影响');
console.log(prev);
console.log(copy);