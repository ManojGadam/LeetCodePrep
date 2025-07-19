/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new PriorityQueue((a,b)=>a-b)
    this.k = k
    for(let i of nums){
        if(this.heap.size()>=k){
            if(i <= this.heap.front())continue
            this.heap.dequeue()
            this.heap.enqueue(i)
        }
        else this.heap.enqueue(i)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.heap.size()>=this.k){
        if(val <= this.heap.front())return this.heap.front()
        this.heap.dequeue()
    }
    this.heap.enqueue(val)
    return this.heap.front()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */