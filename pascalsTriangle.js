var generate = function(numRows) {
    let ret = [[1]] ,prev = [[1]]
    for(let i=1;i<numRows;i++){
      let curr = new Array(i+1).fill(1)
      for(let j=0;j<curr.length;j++){
          if(j==0 || j== curr.length-1)continue
          curr[j] = prev[j-1]+prev[j]
      }
      prev = curr
      ret.push(curr)
    } 
    return ret
  };