class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.val = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        if(!isNaN(this.val))
        this.val += value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        if(!isNaN(this.val))
        this.val -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        if(!isNaN(this.val))
         this.val *= value
         return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(isNaN(this.val))return this
        if(value == 0){
            this.val =  "Division by zero is not allowed"
             return this
            }
         this.val /= value
         return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        if(!isNaN(this.val))this.val = Math.pow(this.val,value)
         return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.val
    }
}