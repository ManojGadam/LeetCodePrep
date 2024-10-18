class stEntry{
    constructor(val,min = Infinity){
        this.val = val
        this.min = min
    }
}

var MinStack = function() {
        this.st = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = val
    if(this.st.length)min = Math.min(this.st[this.st.length-1].min,val)
    this.st.push(new stEntry(val,min))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        return this.st.pop().val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
        return this.st[this.st.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.st[this.st.length-1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */