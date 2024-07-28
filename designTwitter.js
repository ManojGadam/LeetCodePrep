var Twitter = function() {
    this.map = {}
    this.followMap = {}
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.map[userId] ??= []
    this.map[userId].push(tweetId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = []
    let heap = new MaxPriorityQueue()
    for(let i of this.map[userId]){
        heap.enqueue(i)
    }
    console.log(this.followMap[userId])
    for(let i in this.followMap[userId]){
        for(let tId of this.map[i]){
        heap.enqueue(tId)
        }
    }
    for(let i=0;i<10;i++){
        let ele = heap.dequeue()
        if(!ele)break
        res.push(ele.element)
        //console.log(ele)
    }
    return res
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.followMap[followerId] ??= {}
    this.followMap[followerId][followeeId]=1
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    delete this.followMap[followerId][followeeId]
};

let twitter = new Twitter()
twitter.postTweet(1,1)
twitter.getNewsFeed()
