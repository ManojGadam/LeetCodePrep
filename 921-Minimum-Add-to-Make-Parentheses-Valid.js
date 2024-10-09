/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let st = []
  for(let i of s){
    if(i==")" && st[st.length-1]=="("){
        st.pop()
        continue
    }
    st.push(i)
  }
  return st.length
};