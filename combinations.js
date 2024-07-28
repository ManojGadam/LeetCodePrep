var combine = function(n, k) {
    let res = []
    const permute = (i,curr) =>{
        if(curr.length == k){
            if(Math.abs(res[res.length-1][0]-curr[0])>1)return
            res.push(curr.slice())
            curr.pop()
        }
        if(i>n || curr.length>k)return
        curr.push(i)
        permute(i+1,curr)
        curr.pop()
        permute(i+1,curr)
    }
    permute(1,[])
    return res
};

console.log(combine(4,2))