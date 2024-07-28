var permute = function(nums) {
    let res=[]
    if(nums.length==1)return [nums.slice()]
    nums = nums.slice()
    for(let i=0;i<nums.length;i++){
        let n = nums.pop()
        let perms = permute(nums)
        for(let perm of perms){
            perm.push(n)
            res.push(perm)
        }
        nums.push(n)
    }
    return res
};

console.log(permute([1,2,3]))