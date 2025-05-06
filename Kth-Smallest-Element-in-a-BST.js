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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let current = root,st = [],count = 0
    while(current || st.length){
        while(current){
            st.push(current)
            current = current.left
        }
        current = st.pop()
        count++
        if(count == k)return current.val
        current = current.right
    }
    return -1
};