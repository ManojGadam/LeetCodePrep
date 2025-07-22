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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root)return false
    function dfs(head,sum){
        if(!head)return 0
        if(!head.right && !head.left){
            //console.log(head.val,sum)
            if(sum+head.val == targetSum)return true
            return false
        }
        return dfs(head.left,sum+head.val) === true || dfs(head.right,sum+head.val) === true
    }
    return dfs(root,0)
};