function TreeNode(val, left,right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const insertIntoBST=(root,key)=>{
    let x = root,y= null
    while(x!=null){
        y= x
        if(key<x.val)x=x.left
        else x=x.right
    }
    if(key<=y.val){
        y.left = new TreeNode(key)
    }
    else y.right = new TreeNode(key)
}
module.exports = {
    TreeNode,
    insertIntoBST
};

// let array = [5,3,6,2,4,7]
// let root = new TreeNode(array[0])
// for (let i = 1; i < array.length; i++) {
//     insertIntoBST(root,array[i])    
// }
// console.log(root)