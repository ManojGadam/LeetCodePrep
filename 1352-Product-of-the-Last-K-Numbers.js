
var ProductOfNumbers = function() {
    this.nums = [1]
    this.size = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num == 0){
        this.nums = [1]
        this.size = 0
        return
    }
    this.nums.push(this.nums[this.nums.length-1]*num)
    this.size++
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
   if(this.size<k)return 0
   return this.nums[this.nums.length-1]/this.nums[this.nums.length-k-1]
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */