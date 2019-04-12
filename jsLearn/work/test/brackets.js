function isValid(str){
    if(str.length){
        var stack = []
        var res = true
        for(let i in str){
            let word = str[i]
            if((word == '{') || (word == '[') || (word == '(')){
                stack.push(word)
            }
            else if( word == '}'){
                if(stack.length && stack[stack.length - 1] == '{'){
                    stack.pop()
                }
                else{
                    res = false
                    break
                }
            }
            else if( word == ']'){
                if(stack.length && stack[stack.length - 1] == '['){
                    stack.pop()
                }
                else{
                    res = false
                    break
                }
            }
            else if( word == ')'){
                if(stack.length && stack[stack.length - 1] == '('){
                    stack.pop()
                }
                else{
                    res = false
                    break
                }
            }
        }
        if(res && !stack.length){
            return true
        }
        return false
    }
    return false
}
var testArray = ['(a+b){}','}{}{}{}','(a(a+b){a+c})','(a(a+b){a+c))']
for(let j in testArray){
    console.log(testArray[j],isValid(testArray[j]))
}