var spiralOrder = function(matrix) {
    let startH=0,endH=matrix.length-2,startV=0,endV=matrix[0].length-2,res=[],hit=false
    const traverse=(i,j)=>{
        if(j>endH){
            hit=true
            if(i==endV)i=-i
            startH++
        }
        if(i>endV){
            hit=false
            if(j==endH)j=-j
            startV--
        }
       // if(i==startH || j==startV)hit=!hit
        res.push(matrix[i][j])
        console.log(res,i,j)
        hit===true?traverse(Math.abs(i+1),j):traverse(i,Math.abs(j+1))
    }
    traverse(0,0)
    return res
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))