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
    let st = [[root,0]],ret = [],curr = 0, tmp =[]
    while(st.length){
        let [value,lvl] = st.shift()
        if(value){
            if(curr != lvl){
                ret.push(tmp.slice())
                curr += 1
                tmp = []
            }
            tmp.push(value.val)
            st.push([value.left,lvl+1])
            st.push([value.right,lvl+1])
        }
    }
    if(tmp.length)ret.push(tmp.slice())
    return ret
};