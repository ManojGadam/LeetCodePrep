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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let st = [[root,root.val+\\]],ret = []
    while(st.length){
        let [ele,curr] = st.pop()
        if(!ele.left && !ele.right)ret.push(curr)
        if(ele){
            if(ele.right)st.push([ele.right,curr+\->\+ele.right.val])
            if(ele.left)st.push([ele.left,curr+\->\+ele.left.val])
        }
    }
    return ret
};