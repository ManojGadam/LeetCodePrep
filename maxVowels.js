var maxVowels = function(s, k) {
    let vowels = ['a','e','i','o','u']
    let max = 0,len=0
    for(let i=0;i<s.length;i++){
        for(let j=i;j<i+k;j++){
            let x = s[j]
            if(vowels.includes(x))len+=1
        }
        if(len>max)max=len
        len=0
    }
    return max
};

console.log(maxVowels("abciiidef",3))