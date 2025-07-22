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
var maxDepth = function(root) {
    function traverse(head){
        if(!head)return 0
        if(!head.left && !head.right)return 1
       let l = traverse(head.left), r = traverse(head.right)
       return 1+Math.max(l,r)
    }
    return traverse(root)
};