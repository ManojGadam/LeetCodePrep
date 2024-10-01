/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let s=0,e = letters.length-1,mid = 0
    while(s<=e){
        mid = Math.floor((s+e)/2)
        if(letters[mid].charCodeAt(0)>target.charCodeAt(0) && mid>0 && letters[mid-1].charCodeAt(0)<=target.charCodeAt(0)){
            return letters[mid]
        }
        else if(letters[mid].charCodeAt(0) <= target.charCodeAt(0)) s= mid+1
        else e = mid-1
    }
    if(letters[mid].charCodeAt(0)<=target.charCodeAt(0))return letters[0]
    return letters[mid]
};