/**
 * @param {number} capacity
 */

function Node(key,value,prev=null,next=null){
    this.val = key
    this.value = value
    this.prev = prev
    this.next = next
}

var LRUCache = function(capacity) {
    this.len = capacity
    this.map = new Map()
    this.head = new Node(0,0)
    this.tail = new Node(0,0)
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key))return -1
    this.remove(this.map.get(key))
    this.insert(this.map.get(key))
    return this.map.get(key).value
};

LRUCache.prototype.insert = function(node){
    let next = this.head.next
   node.prev = this.head
   node.next = next
   next.prev = node
   this.head.next = node
}

LRUCache.prototype.remove = function(node){
    node.prev.next = node.next
    node.next.prev = node.prev
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.delete(this.map[key])
        this.map.delete(key)
    }
    let newNode = new Node(key,value)
    this.map.set(key,newNode)
    this.insert(this.map.get(key))
        if(this.map.size>this.len){
            //console.log(this.tail)
        this.map.delete(this.tail.prev.val)
        this.remove(this.tail.prev)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let l = new LRUCache(2)
l.put(1,1)
l.put(2,2)
console.log(l.get(1))
l.put(3,3)
console.log(l.get(2))
l.put(4,4)
console.log(l.get(1))
console.log(l.get(2))
console.log(l.get(4))
console.log(l.tail.val)


// let l = new LRUCache(1)
// l.put(2,1)
// l.get(2)
// l.put(3,2)
// l.get(2)
// l.get(3)