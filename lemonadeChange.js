var lemonadeChange = function(bills) {
    let current = {},change = [5,10]
    for(let i of bills){
        current[i] = (current[i] || 0) + 1
        if(i>5){
            i -= 5
           for(let bill=change.length-1;bill>=0;bill--){
            if(change[bill] > i || !current[change[bill]])continue
            while(current[change[bill]] && i-change[bill]>=0){
                i = i-change[bill]
                current[change[bill]] -= 1
            }
           }    
        if(i!==0)return false
        }
    }
    return true
};

console.log(lemonadeChange([5,5,5,5,10,5,10,10,10,20]))