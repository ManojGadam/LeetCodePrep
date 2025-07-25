/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord))return 0
    wordList.push(beginWord)
    let adj = {}
    for(let word of wordList){
        for(let i=0;i<word.length;i++){
            let pattern = word.slice(0,i)+"*"+word.slice(i+1,word.length)
            if(!adj[pattern]) adj[pattern] = []
            adj[pattern].push(word)
        }
    }
    let visit = {}, qu = [beginWord],ret = 1
    while(qu.length){
        let len = qu.length
        for(let i=0;i<len;i++){
            let word = qu.shift()
            if(word == endWord)return ret
            for(let i=0;i<word.length;i++){
                let pattern = word.slice(0,i)+"*"+word.slice(i+1,word.length)
                for(let neigh of adj[pattern]){
                    if(!visit[neigh]){
                        qu.push(neigh)
                        visit[neigh] = 1
                    }
                }
            }
        }
            ret++

    }
    return 0
};