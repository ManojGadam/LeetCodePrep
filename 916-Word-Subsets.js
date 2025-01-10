/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    let arr1 = new Array(words1.length),arr2 = new Array(26).fill(0)
    function transformWord(word){
        let arr = new Array(26).fill(0)
        for(let i of word){
            arr[i.charCodeAt(0)-'a'.charCodeAt(0)] += 1
        }
        return arr
    }
    function fillArr(word){
       word = transformWord(word)
       for(let i=0;i<word.length;i++){
         arr2[i] = Math.max(arr2[i],word[i])
       }
    }
    for(let i=0;i<words1.length;i++){
        arr1[i] = transformWord(words1[i])
    }
    for(let i=0;i<words2.length;i++){
        fillArr(words2[i])
    }
    //console.log(arr2)
    let ret = []
    for(let i=0;i<words1.length;i++){
        let flag = true
            for(let z=0;z<arr2.length;z++){
                if(arr2[z]>arr1[i][z]){
                    flag = false
                    break
                }
            }
        if(flag)ret.push(words1[i])
    }
    return ret
};