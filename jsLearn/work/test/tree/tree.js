function middleSecond(node,res){
    res = res || []
    node.left && middleSecond(node.left,res)
    res.push(node.val)
    node.right && middleSecond(node.right,res)
    return res
}

function middleFirst(node,res){
    res = res || []
    res.push(node.val)
    node.left && middleFirst(node.left,res)
    node.right && middleFirst(node.right,res)
    return res
}

function middleLast(node,res){
    res = res || []
    node.left && middleLast(node.left,res)
    node.right && middleLast(node.right,res)
    res.push(node.val)
    return res
}

let root = {
    left:{
        left:{val:1},
        val:2,
        right:{val:3}
    },
    val:4,
    right:{
        left:{val:5},
        val:6,
        right:{val:7}
    }
}
console.log('前序遍历')
console.log(middleFirst(root))
console.log('中序遍历')
console.log(middleSecond(root))
console.log('后序遍历')
console.log(middleLast(root))