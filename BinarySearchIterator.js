function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
const createBST = (arr,i,n) =>{
    let root  = null    
    if(i<n && arr[i]!=null) {
    root = new TreeNode(arr[i])
    root.left = createBST(arr,2*i+1,n)
    root.right = createBST(arr,2*i+2,n)  
    } 
    return root    
    }
    let root = [7,3,15,null,null,9,20]
    let treeRoot = createBST(root,0,root.length)
    console.log(treeRoot.val)
