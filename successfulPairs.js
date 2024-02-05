// var successfulPairs = function(spells, potions, success) {
//     [spells,potions] = potions.length<spells.length ? [spells,potions] : [potions,spells]
//     let res = []
//     potions.sort((a,b)=>a-b)
//     for(let i=0;i<spells.length;i++){
//         let found = false
//         for(let j=0;j<potions.length;j++){
//             if(spells[i]*potions[j] >= success){
//                 found = true
//                 res.push(potions.length-j)
//                 break
//             }
//         }
//         if(!found)res.push(0)
//     }
//     return res
// };

var successfulPairs = function(spells, potions, success) {
    let res = []
    const binary=(num) =>{
        let s=0,e=potions.length-1,mid = 0
        while(s<=e)
       { 
        mid = Math.floor((s+e)/2)
        let x = num*potions[mid]
        if(x<success)s = mid+1
        else if(x == success){
            let start = 0,end = mid
            while(start <=end ){
               let middle = Math.floor((start+end)/2)
               if(potions[middle] == potions[mid])end = middle-1
               else start = middle+1
             }
             console.log(middle)
             return potions.length - mid
            }
        else e = mid-1
        }
        return potions.length - s
    }
    potions.sort((a,b)=>a-b)
    for(let i=0;i<spells.length;i++){
        console.log(binary(spells[i]))
    }
    return res
};


console.log(successfulPairs([40,11,24,28,40,22,26,38,28,10,31,16,10,37,13,21,9,22,21,18,34,2,40,40,6,16,9,14,14,15,37,15,32,4,27,20,24,12,26,39,32,39,20,19,22,33,2,22,9,18,12,5],[31,40,29,19,27,16,25,8,33,25,36,21,7,27,40,24,18,26,32,25,22,21,38,22,37,34,15,36,21,22,37,14,31,20,36,27,28,32,21,26,33,37,27,39,19,36,20,23,25,39,40],600))