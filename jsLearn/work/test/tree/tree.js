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



//1.深度优先遍历的递归写法
function deepTraversal(node){
    let nodes=[];
    if(node!=null){
        nodes.push[node];
        let childrens=node.children;
        for(let i=0;i<childrens.length;i++)
            deepTraversal(childrens[i]);
    }
    return nodes;
}

//2.深度优先遍历的非递归写法
function deepTraversal(node){
    let nodes=[];
    if(node!=null){
        let stack=[];//同来存放将来要访问的节点
        stack.push(node);
        while(stack.length!=0){
            let item=stack.pop();//正在访问的节点
            nodes.push(item);
            let childrens=item.children;
            for(let i=childrens.length-1;i>=0;i--)//将现在访问点的节点的子节点存入stack，供将来访问
                stack.push(childrens[i]);
        }
    }
    return nodes;
}

//3.广度优先遍历的递归写法
function wideTraversal(node){
    let nodes=[],i=0;
    if(node!=null){
        nodes.push(node);
        wideTraversal(node.nextElementSibling);
        node=nodes[i++];
        wideTraversal(node.firstElementChild);
    }
    return nodes;
}

//4.广度优先遍历的非递归写法
function wideTraversal(node){
    let nodes=[],i=0;
    while(node!=null){
        nodes.push(node);
        node=nodes[i++];
        let childrens=node.children;
        for(let i=0;i<childrens.length;i++){
            nodes.push(childrens[i]);
        }
    }
    return nodes;
}

