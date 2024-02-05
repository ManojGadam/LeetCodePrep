var decodeString = function(s) {
    if(s.length==1)return s
    let st = [],ret="",str=""
    for(let i=0;i<s.length;i++){
        if(s[i]==']'){
            while(1){
               let out= st.pop()
               if(out==='[')break
               str=out+str
            }
            let num = st.pop()
            str = str.repeat(num)
            st.push(str)
            // ret+=str
             continue
        }
        st.push(s[i])
    }
    for(let i=0;i<st.length;i++){
        ret+=st[i]
    }
    return ret
};

console.log(decodeString("3[a2[c]]"))