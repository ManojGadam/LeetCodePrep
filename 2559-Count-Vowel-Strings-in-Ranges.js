/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const arr = new Array(words.length).fill(0)
    let word = words[0]
    const ret = new Array(queries.length)
    const check = {"a":1,"e":1,"i":1,"o":1,"u":1}
    arr[0] = !check[word[0]] || !check[word[word.length-1]] ? 0 : 1
    for(let i=1;i<words.length;i++){
        word = words[i]
        arr[i] += arr[i-1]
        //console.log(!check[word[0]] || !check[word[word.length-1]],word)
        if(!check[word[0]] || !check[word[word.length-1]])continue
        arr[i]+=1
    }
    let query = 0
    for(let i=0;i<queries.length;i++){
        query =queries[i]
        ret[i] = query[0]>0 ? arr[query[1]]-arr[query[0]-1] : arr[query[1]]
    }
    return ret
};