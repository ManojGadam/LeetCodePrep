/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new PriorityQueue((a,b)=>a-b)
    this.k = k
    for(let i of nums){
        this.heap.enqueue(i)
        if(this.heap.size() > k)this.heap.dequeue()
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val)
    if(this.heap.size()>this.k){
        this.heap.dequeue()
    }
    return this.heap.front()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */