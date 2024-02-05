var gcdOfStrings = function(str1, str2) {
    let [l1,l2] = [str1.length,str2.length]
     const isDivisor=(l)=>{
         if(l1%l || l2%l)return false
         let [d1,d2] = [l1/l,l2/l]
         return str1.slice(0,l).repeat(d1)==str1 && str1.slice(0,l).repeat(d2)==str2
     }
 
     for(let i= Math.min(str1.length,str2.length);i>=0;i--){
         if(isDivisor(i)){
             return str1.slice(0,i)
         }
        }
        return ""
 };

 console.log(gcdOfStrings("ABABAB","ABAB"))