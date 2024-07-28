var reverseParentheses = function(s) {
    let st = []
    for(let i=0;i<s.length;i++){
        if(s[i] == ')'){
            let ar = []
            while(1){
                let ele = st.pop()
                if(ele == '(')break
                ar.push(ele)
            }
            j = 0
            while(j<ar.length-1){
                st.push(ar[j])
                j++
            }
        }
        else st.push(s[i])
    }
    return st.join("")
};


console.log(reverseParentheses("(abcd)"))