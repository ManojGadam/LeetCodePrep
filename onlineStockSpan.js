var StockSpanner = function() {
    this.st = [[]]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let ind = 1
    while(this.st[this.st.length-1][0]<=price){
        let [ele,i] = this.st.pop()
        ind+=i
      //  console.log(price,ind)
    }
    this.st.push([price,ind])
    return ind
};

let commands = ["StockSpanner","next","next","next","next","next","next","next","next","next","next"]
let vals = [[],[28],[14],[28],[35],[46],[53],[66],[80],[87],[88]]
let stockSpanner = new StockSpanner();
let results = [];

for (let i = 1; i < commands.length; i++) {
    let result = stockSpanner[commands[i]](vals[i][0]);
    results.push(result);
}