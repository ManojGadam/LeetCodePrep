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
var goodNodes = function(root) {
    const st = [[root,-Infinity]]
    let res = 0
    while(st.length){
        let [node,parent]  = st.pop()
        if(node){
            if(node.val>=parent){
                parent = Math.max(parent,node.val)
                res++
            }
            if(node.left)st.push([node.left,parent])
            if(node.right)st.push([node.right,parent])
        }
    }
    return res
};