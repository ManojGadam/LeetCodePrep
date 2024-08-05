var cloneGraph = function(node,map={}) {
    //console.log(node)
    if(!node || !node.val)return node
    else if(node.val in map)return map[node.val]
    let root = new Node(node.val)
    map[root.val] = root
    for(let i of node.neighbors){
        let ele = cloneGraph(i,map)
        root.neighbors.push(ele)
    }
    return root
};