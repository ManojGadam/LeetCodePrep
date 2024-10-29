/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let valid = []
    for(let i=0;i<triplets.length;i++){
        if(triplets[i][0] == target[0] || triplets[i][1] == target[1] || triplets[i][2] == target[2]){
            if(triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2])continue
            if(triplets[i][0] == target[0] && triplets[i][1] == target[1] && triplets[i][2] == target[2])return true
            valid.push(triplets[i])
        }
    }
    if(!valid.length)return false
    for(let i=0;i<valid.length;i++){
        for(let j=i+1;j<valid.length;j++){
            valid[j] = [Math.max(valid[i][0],valid[j][0]),Math.max(valid[i][1],valid[j][1]),Math.max(valid[i][2],valid[j][2])]
            //console.log(valid[j])
            if(valid[j][0] == target[0] && valid[j][1] == target[1] && valid[j][2] == target[2])return true
        }
    }
    return false
};