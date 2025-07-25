/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let par = new Array(edges.length)
    for(let i=0;i<par.length;i++){
        par[i] = i
    }
    let rank = new Array(edges.length)
    function find(n){
        if(n == par[n])return n
        par[n] = find(par[n])
        return par[n]
    }
    function union(n1,n2){
        let p1= find(n1)
        let p2= find(n2)
        if(p1 == p2)return false
        if(rank[p1] > rank[p2]){
            par[p2] = p1
            rank[p1] += rank[p2]
        }
        else{
            par[p1] = p2
            rank[p2] += rank[p1]
        }
        return true
    }
    for(let [u,v] of edges){
        if(!union(u,v))return [u,v]
    }
};