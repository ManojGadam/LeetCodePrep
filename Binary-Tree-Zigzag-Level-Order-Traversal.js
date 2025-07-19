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
var zigzagLevelOrder = function(root) {
    const st = [[root,0]],ret = []
    let curr = 0,arr = []
    while(st.length){
        let [node,lvl] = st.shift()
        if(node){
            if(curr!=lvl){
                curr++
                ret.push(arr.slice())
                arr = []
            }
            if(lvl%2==0)arr.push(node.val)
            else arr.unshift(node.val)
            //if(lvl%2==0){
            st.push([node.left,lvl+1])
            st.push([node.right,lvl+1])
            // }else{
            //     st.push([node.left,lvl+1])
            //     st.push([node.right,lvl+1])
            // }
        }
    }
    if(arr.length)ret.push(arr.slice())
    return ret
};