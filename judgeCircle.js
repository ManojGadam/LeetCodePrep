// Problem 657 Robot Return to Origin

var judgeCircle = function(moves) {
    let initial = [0,0]
  
    for(let i of moves){
        if(i=="U")initial[1] += 1
        else if(i=="D")initial[1] +=  -1
        else if(i=="R")initial[0] += 1
        else initial[0] +=  -1
    }
    return initial[0] == 0 && initial[1] == 0
};