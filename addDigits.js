var addDigits = function(num) {
    let sum = 0
    while(1){
         sum += num%10
         num = Math.floor(num/10)
         if(num==0 && sum<10){
            console.log(sum)
        break
        }
         if(num == 0){
            num = sum
            sum = 0
        }
    }
    return num
};

console.log(addDigits(38))