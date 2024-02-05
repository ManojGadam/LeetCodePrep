var reverseVowels = function(s) {
    let l=0,r = s.length-1,dict = {'a':1,'e':1,'i':1,'o':1,'u':1}
    const inDict = (num) =>{
        return num.toLowerCase() in dict
    }

    while(l<r){
        let [i1,i2] = [inDict(s[l]),inDict(s[r])]
        if(i1 && i2){
            temp = s[l]
            s[l] = s[r]
            s[r] = temp
            l++
            r--
        }
        else if(i1){
            r--
        }
        else if(i2){
            l++
        }
        else{
        l++
        r--
        }
    }
    return s
};

console.log(reverseVowels("hello"))