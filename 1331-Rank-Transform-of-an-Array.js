/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let n = arr.slice()
    arr.sort((a,b)=>a-b)
    let map={},pr = 0
    for(let i=0;i<arr.length;i++){
        pr = arr[i] == arr[i-1]?pr:pr + 1
        map[arr[i]] = pr
    }
    for(let i=0;i<n.length;i++){
        //console.log(map[n[i]])
        n[i] = map[n[i]]
    }
    return n
};