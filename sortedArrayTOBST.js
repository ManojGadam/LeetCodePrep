var sortedArrayToBST = function(arr) {
    let mid = Math.floor(arr.length/2)
    let buildBST = (arr,i,n) =>{
        let root = null
        if(i>-1 && i<n && arr[i]!=null){
            root = new TreeNode(arr[i])
            root.left = buildBST(arr,i-1,n)
            root.right = buildBST(arr,i+1,n)
        }
        return root
    }
    return buildBST(arr,mid,arr.length)
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

console.log(sortedArrayToBST([1,3]))