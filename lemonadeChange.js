var lemonadeChange = function(bills) {
    let change=0
    for(let i of bills){
        if(i>5){
            i = i-5
            change += 5
            if(change >= i)change = change-i
            else return false
        }
        else change += i
    }
    return true
};

console.log(lemonadeChange([5,5,10,10,20]))