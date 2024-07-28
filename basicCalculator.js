var calculate = function(s) {
    let st = []
    for(let i of s){
        if(i == " ")continue
        if(i == ")"){
            while(st[st.length-1] !== "("){
                let ele = st.pop()
            }
        }
        st.push(parseInt(i))
    }
};