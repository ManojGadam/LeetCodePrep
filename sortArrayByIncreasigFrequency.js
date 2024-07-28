

var frequencySort = function(nums) {
    let map = {},ret = []
    for(let i of nums){
        map[i] = (map[i] || 0)+1
    }
    for(let i in map){
        ret.push({"val":parseInt(i),"fre":map[i]})
    }
    const sortFunc = (a,b) =>{
        if(a.fre<b.fre)return a.val
        else if(a.fre == b.fre)return Math.max(a.val,b.val)
        else return b.val
    }
    ret.sort(function(a,b){
        if(a.fre<b.fre)return a.val
        else if(a.fre == b.fre)return Math.max(a.val,b.val)
        else return b.val
    })

    return ret
}

console.log(frequencySort([1,1,2,2,2,3]))