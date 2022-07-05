function doTask(arr, maxIndex){
    let pointer1=0;
    let pointer2=0;
    let pointer3=maxIndex-1;
   
    while(pointer2<=pointer3){
       if(arr[pointer2]==0){
           [arr[pointer1], arr[pointer2]]=[arr[pointer2], arr[pointer1]];
           pointer1++;
           pointer2++;
       }
       else if(arr[pointer2]==1){
           pointer2++;
       }
       else{
           [arr[pointer2], arr[pointer3]]=[arr[pointer3], arr[pointer2]];
           pointer3--;
       }
    }
    return arr;
   }
   let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
   console.log(doTask(arr,12));