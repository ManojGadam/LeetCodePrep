var canJump = function(nums) {
    let r = false,map = {}
    const recur = (currPos,i,map) =>{
        if(currPos == nums.length-1)return true
        if(nums[currPos] == 0 || currPos>nums.length-1)return false
        while(i<nums[currPos]+1){
           // console.log(currPos+i in map)
            if(currPos+i in map)return map[currPos+i]
            let res =  recur(currPos+i,1,map)
            map[currPos+i] = res
            i++
            r = res || r
            if(res)break
        }
        return r
    }
    return recur(0,1,map)?true:false
};
console.log(canJump([3,0,8,2,0,0,1]))