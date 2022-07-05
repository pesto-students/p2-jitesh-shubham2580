function doTask(arr, maxIndex){
    let maxProfit=0;
    let arrCurr=0;
    let minValue =arr[arrCurr];

    while(arrCurr<maxIndex){
        if(arr[arrCurr]<minValue){
            minValue=arr[arrCurr];
        }
        else{
            if((arr[arrCurr]-minValue)>maxProfit){
                maxProfit=arr[arrCurr]-minValue;
            }      
        }
        arrCurr++;
    }
    return maxProfit;
}

let arr = [3, 2, 6, 5, 0, 3];
console.log(doTask(arr,6));