/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let st = [[root,[]]],m=null,n=null,i=0
  while(st.length){
    let [ele,ancestors] = st.pop()
    if(ele){
        ancestors.push(ele.val)
      // console.log(ele.val,p,ele.val===p)
        if(ele.val===p.val)m=ancestors.slice()
        if(ele.val===q.val)n=ancestors.slice()
        if(m && n)break
        st.push([ele.right,ancestors.slice()])
        st.push([ele.left,ancestors.slice()])
    }
  }  
  let element = null
  for(let i=0;i<Math.min(m.length,n.length);i++){
    if(m[i]!==n[i]){
        //console.log(m[i])
        element = m[i-1]
        break
    }
  }
 if(element==null) element = m.length<n.length ? m[m.length-1] : n[n.length-1]
    //let element = m.length==n.length? m[m.length-2] :m[Math.min(m.length,n.length)-1]
    //console.log(element,m.length,n.length)
    st = [root]
    while(st.length){
        let ele = st.pop()
        if(ele.val == element)return ele
        if(ele){
            if(ele.right)st.push(ele.right)
            if(ele.left)st.push(ele.left)
        }
    }
};