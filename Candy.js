/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const ret = new Array(ratings.length).fill(1)
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1])ret[i] = ret[i-1]+1
    }
    for(let i=ratings.length-2;i>=0;i--){
        if(ratings[i]>ratings[i+1] && ret[i]<=ret[i+1])ret[i] = ret[i+1]+1 
    }
    let sum = 0
    for(let i of ret)sum += i
    return sum
};