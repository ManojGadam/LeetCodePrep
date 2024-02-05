const { TreeNode, insertIntoBST } = require("./insertIntoBST");
var deleteNode = function(root, key) {
    let y = root,x = null,found=false
    while (y!=null){
        if(key==y.val){
            found = true
            break
        }
        else if(key<y.val){
            x = y
             y = y.left}
        else{
            x = y
             y= y.right
             }
    }
    if(!found)return root
    if(y.left == null){
        let ret = Transplant(x,y,y.right)
        if(ret!==undefined) root = ret
    }
    else if(y.right == null)Transplant(x,y,y.left)
    else {
       let [parent,z] = TreeMin(y.right)
       if(parent == z)parent = y
       if(z!==y.right){
           Transplant(parent,z,z.right)
           z.right = y.right
       } 
       let ret =Transplant(x,y,z )
       if(ret) root = ret
        z.left = y.left
    }
    return root
};

const Transplant = (root,u,v) =>{
    if(root == null){
        return v
    }
    else if(u == root.right){
        root.right = v
    }
    else if(u==root.left){
        root.left = v
    }
}

const TreeMin = (root) =>{
    let parent = root
    while(root.left!=null){
        parent = root
        root = root.left
    }
    return [parent,root]
}

let array = [0]
let root = new TreeNode(array[0])
for (let i = 1; i < array.length; i++) {
    insertIntoBST(root,array[i])    
}
console.log(deleteNode(root,0))




