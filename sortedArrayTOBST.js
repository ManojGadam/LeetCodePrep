var sortedArrayToBST = function(arr) {
    let mid = Math.floor(arr.length/2)
    let buildBST = (arr,i,n) =>{
        let root = null
        if(i>-1 && i<n && arr[i]!=null){
            root = arr[i]
            root.left = buildBST(arr,i-1,n)
            root.right = buildBST(arr,i+1,n)
        }
        return root
    }
    return buildBST(arr,mid,arr.length)
};

console.log(sortedArrayToBST([1,3]))