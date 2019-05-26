//二分查找
function find(target,arr,start,end){
    start = start || 0
    end = end || arr.length - 1
    var middle = start + (end-start)/2
    for(var i = middle; i < middle; i++){
        if(target == middle){
            return middle
        }
        if(target > arr[middle]){
            return find(target,arr,middle+1,end)
        }
        else{
            return find(target,start,middle-1)
        }
    }
}

//快速排序
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    var left = []
    var right = []
    var middle = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(middle < arr[i]){
            right.push(arr[i])
        }
        else{
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([middle]).concat(quickSort(right))
}
console.log('快速排序')
console.log(quickSort([3,5,6,7,4,2,1]))

//冒泡排序
function bubbleSort(arr){
    for(var i = 1 ; i < arr.length ; i++){
        for(var j = 0; j < arr.length - i ;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log('冒泡排序')
console.log(bubbleSort([3,5,6,7,4,2,1]))

//数组扁平化
function flattern(arr,res){
    res = res || []
    arr.forEach(item =>{
        if(item instanceof Array){
            res.concat(flattern(item,res))
        }
        else{
            res.push(item)
        }
    })
    return res
}

console.log('flattern')
console.log(flattern([1,2,3,[4,5,[6,7]]]))


//寻找峰值
function findPeak(arr){
    if(arr.length < 3){
        return -1
    }
    var res = []
    for(let i = 1; i < arr.length - 1 ;i ++ ){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            res.push(i)
        }
    }
    return res || -1
}

console.log('峰值查找')
console.log(findPeak([1,6,3,4,2]))

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


//用js实现栈
class Stack {
    constructor() {
        this.items = [];
    };

    push(value) {
        this.items.push(value);
    };

    pop() {
        return this.items.pop();
    };

    peek() {
        return this.items[this.items.length - 1];
    };

    isEmpty() {
        return this.items.length === 0;
    };

    clear() {
        return this.items = [];
    };

    size() {
        return this.items.length;
    }
}

