function TreeNode(val, left,right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var maxDepth = function(root) {
    let st = [root],depth = 0
    while(st.length){
        depth++
        let ele = st.pop()
        if(ele && ele.right)st.push(ele.right)
        if(ele && ele.left)st.push(ele.left)
    }
    return depth
};

let bt = [3,9,20,null,null,15,7]
for (let i = 0; i < bt.length; i++) {
   if(bt[i]) bt[i] = new TreeNode(bt[i])
}
bt[0].left = bt[1]
bt[0].right = bt[2]
bt[1].left = null
bt[1].right = null
bt[2].left = bt[5]
bt[2].right = bt[6]

console.log(maxDepth(bt[0]))