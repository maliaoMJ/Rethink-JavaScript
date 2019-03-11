// BST 二叉搜索树
class TreeNode {
    constructor(key){
       this.key = key;
       this.left =null;
       this.right = null;
    }
}
// 插入节点 辅助函数
function insertNode(node,newNode){
    if(node.key > newNode.key){
        if(node.left === null){
            node.left = newNode
        }else{
          insertNode(node.left,newNode)
        }
    }else{
        if(node.right === null){
            node.right = newNode
        }else{
            insertNode(node.right,newNode);
        }
    }
}
// 中序遍历 辅助函数
function inOrderTraverseNode(node,callback){
   if(node!== null){
       inOrderTraverseNode(node.left,callback);
       callback(node.key);
       inOrderTraverseNode(node.right,callback);
   }
}
// 先序遍历 辅助函数
function preOrderTraverseNode(node,callback){
   if(node !==null){
       callback(node.key);
       preOrderTraverseNode(node.left,callback);
       preOrderTraverseNode(node.right,callback);
   }
}
// 后续遍历 辅助函数
function postOrderTraverseNode(node,callback){
   if(node !== null){
       postOrderTraverseNode(node.left, callback);
       postOrderTraverseNode(node.right, callback);
       callback(node.key);
   }
}
// 最小节点辅助函数
function minNode(node){
    while(node && node.left !==null){
        node = node.left;
    }
    return node.key;
}
// 最大节点辅助函数
function maxNode(node){
    while(node && node.right !==null){
        node = node.right;
    }
    return node.key;
}
// 搜索辅助函数
function serachNode(node,key){
    if(node === null){
        return false;
    }else{
        if(key < node.key){
            return serachNode(node.left,key);
        }else if(key > node.key){
            return serachNode(node.right,key);
        }else{
            return true;
        }
    }
}
// 删除辅助函数
function removeNode(node, key) {
    if (node === null) {
        return null;
    }
    if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
    } else if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
    } else { //键等于node.key
        //第一种情况——一个叶节点
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        //第二种情况——一个只有一个子节点的节点 
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }
        //第三种情况——一个有两个子节点的节点
        var aux = findMinNode(node.right);
        node.key = aux.key; //
        node.right = removeNode(node.right, aux.key);
        return node;
    }
};
// callback 辅助函数
function printNode(value){
   console.log(value);
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    // 插入几点
    insert(key){
        let newNode = new TreeNode(key);
        if(this.root === null){
            this.root = newNode;
        }else{
            insertNode(this.root,newNode)
        }
    }
    // 中序遍历 callback 对节点操作回掉函数
    inOrderTraverse(callback){
        inOrderTraverseNode(this.root, callback);
    }
    //先序遍历
    preOrderTraverse(callback){
        preOrderTraverseNode(this.root,callback);
    }
    // 后序遍历
    postOrderTraverse(callback){
       postOrderTraverseNode(this.root,callback);
    }
    // 最小值
    min(){
        return minNode(this.root);
    }
    // 最大值
    max(){
        return maxNode(this.root);
    }
    // 搜索
    serarch(key){
        return serachNode(this.root,key);
    }
    // 删除节点
    remove(key){
        root = removeNode(root, key);
    }
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log(tree);
console.log('--------------------中序遍历-------------');
console.log(tree.inOrderTraverse(printNode));
console.log('--------------------先序遍历-------------');
console.log(tree.preOrderTraverse(printNode));
console.log('--------------------后序遍历-------------');
console.log(tree.postOrderTraverse(printNode));
console.log('--------------------最小值-------------');
console.log(tree.min());
console.log('--------------------最大值-------------');
console.log(tree.max());

console.log('--------------------搜索-------------');
console.log(tree.serarch(100));
