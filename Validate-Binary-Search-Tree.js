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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    function traverse(head,lower,upper){
        if(!head)return true
        if(head.val <= lower || head.val >= upper)return false
        let left = traverse(head.left,lower,head.val),right = traverse(head.right,head.val,upper)
        return left && right
    }
    return traverse(root,-Infinity,Infinity)
};