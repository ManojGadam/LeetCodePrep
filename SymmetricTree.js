var isSymmetric = function(root) {
    let st1 = [roo],st2 = [root]
    while(st1.length){
        let e1 = st1.shift()
        let e2 = st2.shift()
        console.log(e1,e2)
        if((e1&&!e2) || (e2&&!e1))return false
        if(e1 && e2 && e1.val !== e2.val) return false
        if(e1){
            st1.push(e1.left)
            st1.push(e1.right)
        }
        if(e2){
            st2.push(e2.right)
            st2.push(e2.left)
        }
    }
    return true
};
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
let arr = [1,0]
const buildTree = (arr,i,n) =>{
    let root = null
    if(i<n && arr[i]!==null){
        root = new TreeNode(arr[i])
        root.left = buildTree(arr,2*i+1,n)
        root.right = buildTree(arr,2*i+2,n)
    }
    return root
}
let head = buildTree(arr,0,arr.length)

console.log(isSymmetric(head))