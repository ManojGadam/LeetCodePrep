/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
   let ret = 1n; 
    let five = 5n;
    let four = 4n; 
    let mod = 1000000007n;

    function power(base, exp) {
    let res = 1n;
    base %= 1000000007n;

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            res = (res * base) % 1000000007n;
        }
        base = (base * base) % 1000000007n;
        exp >>= 1n; // exp = exp / 2n
    }
    return res;
}

    if (n % 2 === 0) {
        ret = (power(five, BigInt(n / 2)) * power(four, BigInt(n / 2))) % mod;
    } else {
        ret = (power(four, BigInt(Math.floor(n / 2))) * power(five, BigInt(Math.floor(n / 2) + 1))) % mod;
    }

    return Number(ret); // Convert back to Number
};