function stockPairs(stocksProfit, target) {
    // Write your code here
    stocksProfit.sort((a,b)=>a-b)
    let j = 0,k = stocksProfit.length-1,res = 0
    while(j<k){
        let tar = stocksProfit[j]+stocksProfit[k]
        if(tar == target){
            res+=1
            j++
            k++
            }
        else if(tar < target){
            j++
        }
        else{
            k++
        }
    }
    return res
}

console.log(stockPairs([5,7,9,13,11,6,6,3,3],12))