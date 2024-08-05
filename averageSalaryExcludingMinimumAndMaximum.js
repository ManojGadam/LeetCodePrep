var average = function(salary) {
    let min = Infinity,max = -Infinity,sum = 0
    for(let i of salary){
        sum += i
        min = Math.min(min,i)
        max = Math.max(max,i)
    }
    sum -= (min+max)

    return (sum)/(salary.length-2)
};