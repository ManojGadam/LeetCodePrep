/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    arr1.sort((a,b)=>a["id"] - b["id"])
    arr2.sort((a,b)=>a["id"] - b["id"])
    let i=0,j=0,ret = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i].id < arr2[j].id){
            ret.push(arr1[i])
            i++
        }
        else{
            if(arr1[i].id == arr2[j].id){
                for(let key of Object.keys(arr2[j])){
                    if(key in arr1[i])delete arr1[i][key]
                }
                arr2[j] = {...arr2[j],...arr1[i]}
                i++
            }
            ret.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length && j==arr2.length){
        ret.push(arr1[i])
        i++
    }
    while(j<arr2.length && i==arr1.length){
        ret.push(arr2[j])
        j++
    }
    return ret
};