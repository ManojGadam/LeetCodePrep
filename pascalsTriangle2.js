var getRow = function(rowIndex) {
    let tri = [[1]]
    for(let i=1;i<rowIndex;i++){
        let curr = new Array(i+1).fill(1)
       for(let j=0;j<i+1;j++){
           if(j == 0 || j== i) continue
           console.log(tri[i-1][j],i-1,j)
           curr[j] = tri[i-1][j-1]+tri[i-1][j]
       }
       tri.push(curr)
    }
    return tri
};

console.log(getRow(3))