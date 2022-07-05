
class Node{

  constructor(){
    this.key = 0
    this.left = null
    this.right = null
  }

}


let newNode=(key)=>{

  let temp = new Node()
  temp.key = key
  temp.left = null
  temp.right = null
  return temp

}

let height=(root)=>{


  let depth = 0

  let q = []
  

  q.push(root)
  q.push(null)
  while(q.length>0){
    let temp = q.shift()
  
   
    if(temp == null)
      depth += 1
    
    
    if(temp != null){
      if(temp.left)
        q.push(temp.left)
      
      if(temp.right)
        q.push(temp.right)
    }
      
    
    else if(q.length>0)
      q.push(null)
  }
  return depth

}


let root = newNode(1)
root.left = newNode(12)
root.right = newNode(13)

root.right.left = newNode(14)
root.right.right = newNode(15)

root.right.left.left = newNode(21)
root.right.left.right = newNode(22)
root.right.right.left = newNode(23)
root.right.right.right = newNode(24)

console.log(height(root));

