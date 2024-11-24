
var MyQueue = function() {
    this.s1 = []
    this.rl = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.rl++
    return this.s1[this.rl-1]
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s1[this.rl]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length-1 - this.rl<0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */