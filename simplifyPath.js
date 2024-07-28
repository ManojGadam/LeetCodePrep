var simplifyPath = function(path) {
    let st=[""],word = []
    path = path+"/"
    for(let i=1;i<path.length;i++){
        let x = path[i]
        if(path[i] == "/" && word.length){
            let pword  = word.join("")
            word = []
            if(pword == "..")st.pop()
            else if(pword == ".")continue
            else if(pword == "//")pword = ""
            else st.push(pword)
        }
       else word.push(path[i])
    }
    return st.join("/")
};

console.log(simplifyPath("/home//foo/"))