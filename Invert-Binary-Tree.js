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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let qu = [root]
     if (!root) return null;
        while(qu.length){
            let node = qu.shift();

    [node.left, node.right] = [node.right, node.left]; 
            if(node.left)qu.push(node.left)
            if(node.right)qu.push(node.right)
        }
        return root
};