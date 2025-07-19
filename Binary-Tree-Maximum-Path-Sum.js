/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let ret = -Infinity
    function recur(nr){
        if(!nr)return 0
       // if(!nr.left && !nr.right)return nr.val
        let l = recur(nr.left), r= recur(nr.right)
        ret = Math.max(nr.val+l+r,nr.val+Math.max(l,r,0),ret)
        return nr.val+Math.max(l,r,0)
    }
    ret = Math.max(recur(root),ret)
    return ret
};