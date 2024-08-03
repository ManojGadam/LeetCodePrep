var buildTree = function(preorder, inorder) {
    if(preorder.length == 0 || inorder.length == 0)return null
    let root = new TreeNode(preorder[0])
    let mid = inorder.findIndex(x=>x == root)
    let leftPre = preorder.slice(1,mid+1),leftIn = inorder.slice(0,mid)
    console.log(leftPre,leftIn)
    let rightPre = preorder.slice(mid+1),rightIn = inorder.slice(mid+1)
    root.left = buildTree(leftPre,leftIn)
    root.right = buildTree(rightPre,rightIn)
    return root
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let preorder = [3,9,20,15,7],inorder = [9,3,15,20,7]
buildTree(preorder,inorder)