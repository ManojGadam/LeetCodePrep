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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root)return []
    let ret = []
    function dfs(head,st,sum){
        //console.log(head)
        if(!head)return
        if(!head.left && !head.right){
            console.log(head.val)
            if(sum+head.val == targetSum){
            st.push(head.val)    
            ret.push(st.slice())
            return
        }
        }
        st.push(head.val)
        dfs(head.left,st.slice(),sum+head.val)
        dfs(head.right,st.slice(),sum+head.val)
        st.pop()
    }
    dfs(root,[],0)
    return ret
};