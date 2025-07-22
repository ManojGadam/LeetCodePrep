/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let st1=[p],st2 =[q]
    while(st1.length && st2.length){
        let e1 = st1.pop()
        let e2 = st2.pop()
        if((!e1 && e2) || (!e2 && e1))return false
        if(e1 && e2 && (e1.val !== e2.val))return false
        if(e1 && e2){
            st1.push(e1.left)
            st2.push(e2.left)
            st1.push(e1.right)
            st2.push(e2.right)
        }
    }
    if(st1.length || st2.length)return false
    return true
};