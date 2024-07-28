var setZeroes = function(matrix) {
    let hashmap = {}
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0){
            //make previous entries zero
              let r = i,c=j  
              while(c>=0){
                matrix[r][c]=0
                c--
              }
              while(r>=0){
                matrix[r][j]=0
                r--
              }  
            //handle next entries
            hashmap[i]=1
            hashmap[j]=1
            }
            else if(i in hashmap || j in hashmap)matrix[i][j]==0
        }
    }
    return matrix
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))