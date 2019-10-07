// 使用set
function uniqueSet(arr) {
  return [...new Set(arr)]
}

// 使用splice，取一个数和数组后面的所有数比较，如果相同则删除
function uniqueSplice(arr){            
  for(var i=0; i<arr.length; i++){
      for(var j=i+1; j<arr.length; j++){
          if(arr[i]==arr[j]){
          //第一个等同于第二个，splice方法删除第二个
              arr.splice(j,1);
              j--;
          }
      }
  }
  return arr;
}

// 使用indexOf，判断新数组中是否有和老数组相同的数
function uniqueIndexOf(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}

// 使用includes，判断新数组中是否有和老数组相同的数
function uniqueIncludes(arr) {
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {
              //includes 检测数组是否有某个值
              array.push(arr[i]);
              }
    }
    return array
}

// 使用filter，item的index与老数组中的index相同则返回
function uniqueFliter(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}