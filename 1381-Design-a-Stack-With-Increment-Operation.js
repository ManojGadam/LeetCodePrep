/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.len = maxSize
    this.st = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.st.length==this.len)return
    this.st.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
   return this.st.pop() || -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let i=0;i<k;i++){
        if(i==this.st.length)break
        this.st[i] += val
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */