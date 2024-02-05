var pathSum = function(root, targetSum) {
    let st = [[root,0]] ,ret = 0
    while(st.length){
        let [ele,currentSum] = st.pop()
        if(ele){
            currentSum += ele.val
            if(currentSum == targetSum )ret++
            else if(currentSum > targetSum)currentSum = 0
            if(ele.right)st.push([ele.right,currentSum]) 
            if(ele.left)st.push([ele.left,currentSum])
        }
    }
    return ret
};

function TreeNode(val, left,right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createBinaryTreeFromArray(array, index = 0) {
    if (index >= array.length || array[index] === null) {
        return null;
    }

    const node = new TreeNode(array[index]);
    node.left = createBinaryTreeFromArray(array, 2 * index + 1);
    node.right = createBinaryTreeFromArray(array, 2 * index + 2);

    return node;
}

const array = [5,4,8,11,null,13,4,7,2,null,null,5,1],targetSum= 22
const root = createBinaryTreeFromArray(array);
console.log(pathSum(root,targetSum))