/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let map={},res = new Array(boxes.length).fill(0)
    for(let i=0;i<boxes.length;i++){
        if(boxes[i] == "1")map[i] = i
    }
    if(!Object.keys(map).length)return res
    for(let i=0;i<boxes.length;i++){
        for(let key in map){
            res[i] += Math.abs(i-map[key])
        }
    }
    return res
};