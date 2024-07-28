var wordPattern = function(pattern, s) {
  let map1 = new Map(),arr = s.split(" ")
  let map2 = new Map()
  if(pattern.length!==arr.length)return false
  for(let i=0;i<pattern.length;i++){
    if(map1.get(pattern[i])){
        if(map1.get(pattern[i])!==arr[i])return false
    }
    // let a = arr[i]
    // let b = map2[arr[i]]
    // let c = map1["a"]
    if(map2.get(arr[i])){if(map2.get(arr[i])!==pattern[i])return false}
    //map1[pattern[i]] = arr[i]
    map1.set(pattern[i],arr[i])
    //map2[arr[i]] = pattern[i]
    map2.set(arr[i],pattern[i])
  }
  return true
};

  console.log(wordPattern("abba","dog constructor constructor dog"))