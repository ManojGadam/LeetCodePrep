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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    let map={},qu=[[root,0]],total = 0
    while(qu.length){
        let [ele,level] = qu.shift()
        if(!map[level])map[level] = 0
        map[level] += ele.val
        if(ele){
            let childTot = 0
            if(ele.left){
                qu.push([ele.left,level+1])
            }
            if(ele.right){
                qu.push([ele.right,level+1])
            }
        }
    }
    qu = [[root,0]]
    root.val = 0
    while(qu.length){
        let [ele,level] = qu.shift()
        if(ele){
            if(ele.left && ele.right){
                let curr = ele.left.val+ele.right.val
                ele.left.val = map[level+1] - curr
                ele.right.val = map[level+1] - curr
                //console.log(ele.left.val,ele.right.val)
                qu.push([ele.left, level + 1]);
                qu.push([ele.right, level + 1]);
            }
            else if(ele.right){
                ele.right.val = map[level+1] - ele.right.val
                qu.push([ele.right,level+1])
            }
            else if(ele.left){
                ele.left.val = map[level+1] - ele.left.val
                qu.push([ele.left,level+1])
            }
        }
    }
    return root
};