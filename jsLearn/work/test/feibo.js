 function recurFib(n) {
  if (n < 2) {
    return n;
  }
  else {
    return recurFib(n-1) + recurFib(n-2);
  }
 }

 //只需要时复O(n)就能解决
 function iterFib(n){
  var last=1;
  var nextlast=1;
  var result=1;
  for(var i=2;i<n;++i){
    result=last+nextlast;
    nextlast=last;
    last=result;
  }
  return result;
 }


var startTime,endTime
startTime = new Date()
console.log(`recurFib start`)
console.log(recurFib(42))
endTime = new Date()
console.log(`recurFib end ${endTime - startTime}`)

startTime = +new Date()
console.log(`iterFib start`)
console.log(iterFib(42))
endTime = +new Date()
console.log(`iterFib end ${endTime} - ${startTime}`)