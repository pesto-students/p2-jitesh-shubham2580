function doTask(arr, size, num) {
    let map = new Map();
   for(let i=0; i<size;i++){
    if(!map.has(arr[i])){
        map.set(arr[i],1);
    }
   }

   for(let i=0; i<size;i++){
    if(map.has(num+arr[i])){
        console.log("Pair Found: (" + arr[i] + ", " + (num + arr[i]) + ")");
    }
   }
  }
   
  // Driver Code
  let arr = [1, 8, 40, 100, 30];
  let size = arr.length;
  let num = 60;
  doTask(arr, size, num);