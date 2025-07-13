/**
 * @param {string[]} strs
 * @return {string}
 */
 class Node{
    constructor(){
        this.children = {}
        this.last = false
    }
 }
var longestCommonPrefix = function(strs) {
    let node = new Node()
    function insertIntoTrie(str){
        let root = node
        for(let i of str){
            if(!root.children[i])root.children[i] = new Node()
            root = root.children[i]
        }
        root.last = true
    }
    for(let str of strs){
        if(!str)return ""
        insertIntoTrie(str)
    }
    let ret = ""
    while(Object.keys(node.children).length){
        if(Object.keys(node.children).length > 1 || node.last)break
   // console.log(Object.keys(node.children)[0])
    let curr = Object.keys(node.children)[0]
         ret += curr
         node = node.children[curr] 
    }
    return ret
};