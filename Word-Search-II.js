/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 class Node{
    constructor(){
        this.children = []
        this.eow = false
        this.word = ""
    }
 }
var findWords = function(board, words) {
    let root = new Node()
    function createTrie(word){
        let curr = root
        for(let i of word){
            if(!curr.children[i])curr.children[i] = new Node()
            curr = curr.children[i]
        }
        curr.eow = true
        curr.word = word
    }
    for(let i of words){
        createTrie(i)
    }
    const m = board.length, n = board[0].length,directions = [[1,0],[-1,0],[0,1],[0,-1]],result = new Set();
     function dfs(row, col, node) {
        if (row < 0 || col < 0 || row >= m || col >= n || board[row][col] === '#' || !node.children[board[row][col]]) {
            return;
        }

        const char = board[row][col];
        const nextNode = node.children[char];

        if (nextNode.eow) {
            result.add(nextNode.word);
        }

        // Mark current cell as visited for this path
        board[row][col] = '#';

        for (const [dr, dc] of directions) {
            dfs(row + dr, col + dc, nextNode);
        }

        // Backtrack: Unmark the current cell to allow it to be part of other words
        board[row][col] = char;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] in root.children) {
                dfs(i, j, root);
            }
        }
    }

    return Array.from(result);
};