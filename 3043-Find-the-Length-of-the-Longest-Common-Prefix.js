/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}
var longestCommonPrefix = function(arr1, arr2) {
    let root = new TrieNode(),ret = 0
    function addToTrie(word){
        let curr = root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children))curr.children[word[i]] = new TrieNode()
            curr = curr.children[word[i]]
        }
        curr.endOfWord = true
    }
    function search(word){
        let curr = root , len = 0
        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children))break
            curr = curr.children[word[i]]
            len++
        }
        return len
    }
    for(let i of arr1){
        addToTrie(i.toString())
    }
    for(let i of arr2){
       ret = Math.max(ret,search(i.toString()))
    }
    return ret
};
