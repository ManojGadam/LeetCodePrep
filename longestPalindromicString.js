var longestPalindrome = function(s) {
    if(s.length<2)return s
    const checkPalindrome = (left,right) =>{
       while (left>=0 && right<s.length && s[left] == s[right]){
            left--
            right++
       }
       return s.slice(left+1,right) 
    }
    let max = s[0]
    
    
    for(let i=0;i<s.length;i++){
        let odd = checkPalindrome(i,i)
        let even = checkPalindrome(i,i+1)
      //  console.log(odd,even)
        if(odd.length>max.length) max = odd
        if(even.length>max.length) max = even
    }
    
    return max
    };

    console.log(longestPalindrome("babad"))