var subsets = function(nums) {
    let res = [[]]
    const rec = (i,curr) =>{
        if(i>nums.length)return
        curr.push(nums[i])
        res.push(curr.slice())
        // rec(i,curr)
        // curr.pop()
        rec(i+1,curr)
    }
    rec(0,[])
    return res
};

console.log(subsets([1,2,3]))