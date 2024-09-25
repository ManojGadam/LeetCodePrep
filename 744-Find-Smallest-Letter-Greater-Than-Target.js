/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   for(let i of letters){
    if(i.charCodeAt(0)>target.charCodeAt(0))return i
   }
   return letters[0]
};