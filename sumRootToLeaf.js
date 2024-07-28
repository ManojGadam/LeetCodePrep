var sumNumbers = function(root) {
    let st = [[root,0]],total = 0,ele = null, value = 0
    while(st.length){
        [ele,value] = st.pop()
        if(ele){
            //console.log(ele,value)
            st.push([ele.right,value*10+ele.val])
            st.push([ele.left,value*10+ele.val])
        }
        if(ele && !ele.right && !ele.left) total += value
    }
    return total
};

console.log(sumNumbers([1,2,3]))