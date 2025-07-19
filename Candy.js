/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const left = new Array(ratings.length).fill(1),right = new Array(ratings.length).fill(1), n =ratings.length
    for(let i=1;i<n;i++){
        if(ratings[i]>ratings[i-1]){
            left[i] = left[i-1]+1
        }
    }
    for(let i=n-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
            right[i] = right[i+1]+1
        }
    }
    let res = 0
    for(let i=0;i<n;i++){
        res += Math.max(left[i],right[i])
    }
    return res
};