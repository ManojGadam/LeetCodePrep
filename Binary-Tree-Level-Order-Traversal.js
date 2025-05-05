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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)return []
    let qu = [[root,0]],ret = [],curr = 0,tmp = []
    while(qu.length){
        const [node,level] = qu.shift()
        if(curr!=level){
            curr = level
            ret.push(tmp.slice())
            tmp = []
        }
        
        if(node){
            tmp.push(node.val)
            qu.push([node.left,level+1])
            qu.push([node.right,level+1])
        }
    }
    return ret
};