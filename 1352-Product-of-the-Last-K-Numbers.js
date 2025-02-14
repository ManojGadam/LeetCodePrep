
var ProductOfNumbers = function() {
    this.nums = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.nums.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let pro = 1
    for(let i=0;i<k;i++){
        let num = this.nums[this.nums.length-1-i]
        if(num == 0)return 0
        pro *= num
    }
    return pro
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */