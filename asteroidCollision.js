var asteroidCollision = function(asteroids) {
    let res = []
   for(let i=0;i<asteroids.length;i++){
       while(res.length && asteroids[i]<0 && res[res.length-1]>0){
           let diff = asteroids[i]+res[res.length-1]
           if(diff<0){
               res.pop()
           }
           else if(diff>0){
               asteroids[i]=0
           }
           else{
               asteroids[i]=0
               res.pop()
           }
       }
       if(asteroids[i]){
           res.push(asteroids[i])
       }
   }
   return res
};
console.log(asteroidCollision([10,2,-5]))


// let i= asteroids.length-1    
//     while(i>0){
//         let l = asteroids[i]
//         let r = asteroids[i-1]
//         if((l<0 && r>0)){
//             if(l==-r){
//                 asteroids.pop()
//                 asteroids.pop()
//             }
//             else{
//                 [p,po] = Math.abs(l)>Math.abs(r)?[i,i-1]:[i-1,i]
//                 asteroids.splice(po,1)
//             }
//         }
//         else if((l>0 && r>0)||(l<0||r<0)||(l>0 && r<0)){
//             i--
//         }
//         i--
//     }
//     return asteroids