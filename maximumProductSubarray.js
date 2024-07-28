var maxProduct = function(nums) {
    let res = [],max = -Infinity
    const subsets=(i,curr,indArr,currProduct)=>{
        if(currProduct>max)max = currProduct
        if(i>nums.length-1)return
        if(indArr.length){
            let prev = indArr[indArr.length-1]
            if(i-prev>1)return
        }
        if(!currProduct)currProduct = 1
        curr.push(nums[i])
        indArr.push(i)
        //currProduct *= nums[i]
        //res.push(curr.slice())
        subsets(i+1,curr,indArr,currProduct*nums[i])
        curr.pop()
        indArr.pop()
        subsets(i+1,curr,indArr,currProduct)
    }
    subsets(0,[],[])
   // console.log(res)
    console.log(max)
};

console.log(maxProduct([-2,0,-1]))