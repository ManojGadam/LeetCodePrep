var checkStraightLine = function(coordinates) {
    let slope = findSlope(coordinates[1],coordinates[0])
    function findSlope(x1,x2){
        if(x2[0]-x1[0] == 0)return Infinity
        return (x2[1]-x1[1]) / (x2[0]-x1[0])
    }
    for(let i=2;i<coordinates.length;i++){
        if(findSlope(coordinates[i],coordinates[i-1])!==slope)return false
    }
    return true
};