/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ret = {}
    function dfs(i,st){
        if(i > nums.length)return
        if(i == nums.length){
            ret[st.slice().sort()] = st.slice()
            return
        }
        st.push(nums[i])
        dfs(i+1,st)
        st.pop()
        dfs(i+1,st)
    }
    dfs(0,[])
    //console.log(ret)
    return Object.values(ret)
};