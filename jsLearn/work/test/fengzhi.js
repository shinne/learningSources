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

console.log(findPeak([1,2,3,4,5]))
console.log(findPeak([1,6,3,4,2]))