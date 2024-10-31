/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(arr) {
    let buildBST = (l,r) =>{
        let mid = Math.floor((l+r)/2)
        let root = null
        if(mid<l || mid>r)return root
        root = new TreeNode(arr[mid])
        root.left = buildBST(l,mid-1)
        root.right = buildBST(mid+1,r)
        return root
    }
    return buildBST(0,arr.length-1)
};