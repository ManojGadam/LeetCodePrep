var lengthOfLongestSubstring = function(s) {
    if(s=="")return 0
    let l=0,max = 0,map ={}
    for(let r=0;r<s.length;r++){
      map[s[r]] = (map[s[r]] || 0)+1
      if(((r-l+1) - Object.keys(map).length) != 0){
          map[s[l]] -= 1 
          l++
      }
      max = Math.max(max,r-l+1)
    }
    return max
  }

  console.log(lengthOfLongestSubstring("pwwkew"))