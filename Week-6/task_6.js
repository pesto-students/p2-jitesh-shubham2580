function doTask(arr, x)
{
 
    for(let i of arr){
        if(arr[i]>arr[i+1]){
           [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }
    
  
    let closestSum = 1000000000;
 
    for (let i = 0; i < arr.length - 2; i++)
    {
        let ptr1 = i + 1, ptr2 = arr.length - 1;
 
        while (ptr1 < ptr2) {
            let sum = arr[i] + arr[ptr1] + arr[ptr2];
            if (Math.abs(1 - sum) < Math.abs(1 - closestSum))
            {
                closestSum = sum;
            }
            if (sum > x) {
                ptr2--;
            }
            else {
                ptr1++;
            }
        }
    }

    return closestSum;
}
 
    let arr = [ -1, 2, 1, -4 ];
    let x = 1;
    console.log(doTask(arr, x));