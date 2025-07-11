/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const st = [],map = {
        "]":"[",
        "}":"{",
        ")":"("
    }
    for(let i of s){
        if(!map[i])st.push(i)
        else{
            if(!st.length)return false
            let ele = st.pop()
            if(ele!=map[i])return false
        }
    }
    return st.length ? false : true
};