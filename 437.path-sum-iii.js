/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 */

// @lc code=start
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let st = [[root,[]]] ,ret = 0
    while(st.length){
    let [ele,currentNodes] = st.pop()
        currentNodes.push(ele.val)
        let currentSum = findSum(currentNodes)
        if(currentSum == targetSum )ret++
        while(currentSum > targetSum){
            currentNodes.shift()
            currentSum = findSum(currentNodes)
        }
        if(ele.right)st.push([ele.right,currentNodes]) 
        if(ele.left)st.push([ele.left,currentNodes])
    }
    return ret
};

const findSum = (arr) =>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}

// @lc code=end

