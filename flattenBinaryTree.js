var flatten = function(root) {
    let st = [root],prev = null
        while(st.length){
            let ele = st.pop()
            if(ele){
                if(ele.right)st.push(ele.right)
                if(ele.left)st.push(ele.left)
                ele.left = null
                if(prev){
                    prev.right = ele
                    prev = prev.right
                    }
                else {
                    prev = ele
                    }
            }
        }
    };
     function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

    let arr = [1,2,5,3,4,null,6]
    const createBST = (arr,i,n) =>{
        let root = null
        if(i<n && arr[i]!=null){
            root = new TreeNode(arr[i])
            root.left = createBST(arr,2*i+1,n)
            root.right = createBST(arr,2*i+2,n)
        }
        return root
    } 
   let root =  createBST(arr,0,arr.length)

   console.log(flatten(root))