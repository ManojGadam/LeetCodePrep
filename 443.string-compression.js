/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let map = {}
    map[chars[0]]=1
    console.log(map)
    for(let i=1;i<chars.length;i++){
       if(chars[i]!==chars[i-1]){
          // map[chars[i-1]]+=1
           let noOfChars = map[chars[i-1]]
           if(noOfChars == 1) continue
           let s = String(noOfChars)
           console.log(s)
            if(noOfChars > 9){
                s = noOfChars.split('')

            }
            else chars[i+1] = s
       }
       else{
        if(chars[i] in map)map[chars[i]]+=1
        else map[chars[i]]=1
       }
    }
    console.log(map)
};
// @lc code=end

console.log(compress([["a","a","b","b","c","c","c"]]))