var reverseWords = function(s) {
    s = s.trim()
    let k="",words=[]
    for(let i=0;i<s.length;s++){
        k += s[i]
        if(s[i]==" " && k){
            words.push(k)
            k=""
        }
    }
    console.log(words)
};

reverseWords("the sky is blue")