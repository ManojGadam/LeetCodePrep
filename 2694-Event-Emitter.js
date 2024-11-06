class EventEmitter {
    constructor(){
        this.eventMap = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(!(eventName in this.eventMap)){
            this.eventMap[eventName] = []
        }
        this.eventMap[eventName].push(callback)
        return {
            unsubscribe: () => {
                let i=0
                for(i=0;i<this.eventMap[eventName].length;i++){
                    if(this.eventMap[eventName][i] == callback)break
                }
                 this.eventMap[eventName].splice(i,1)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let ret = []
        if(!this.eventMap[eventName])return ret
        for(let callBack of this.eventMap[eventName]){
            let val = callBack(...args)
            ret.push(val)
        }
        return ret
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */