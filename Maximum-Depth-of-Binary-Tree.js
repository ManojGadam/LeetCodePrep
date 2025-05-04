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
  let max = 0
  const dfs=(node)=>{
    if(!node)return 0
    if(!node.left && !node.right)return 1
    let l = 1+dfs(node.left), r = 1 + dfs(node.right)
    return Math.max(l,r)
  }  
  return dfs(root)
};