var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord))return 0
    return bfs(beginWord,wordList,endWord)
};
const checkForNextWord = (i,j) =>{
    let numOfDiffer = 0
    for(let at= 0;at<i.length;at++){
        if(i[at]!==j[at])numOfDiffer++
        if(numOfDiffer>1)return false
    }
    return numOfDiffer == 1
}

function bfs(word,wordList,end){
    let st = [[word,1]] , visited = {},minLength = Infinity
    visited[word] = 1
    while(st.length){
        let [curr,currLen] = st.shift()
        for(let i of wordList){
            if(!visited[i] && checkForNextWord(curr,i)){
                st.push([i,currLen+1])
                visited[i] = 1
            }
            if(i == end && checkForNextWord(curr,i)){
                minLength = Math.min(minLength,currLen+1)
                break
            }
        }
     }
     return minLength === Infinity ? 0 : minLength
}

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))