
function maxSum(array){
    let currentSum=0;
    let maxSum = 0;

    for(let i of array){
        currentSum=maxSum+ i;
        if(maxSum<currentSum){
            maxSum=currentSum;
        }
        if(0>=currentSum){
            currentSum=0;
        }
    }
    return maxSum;

}

let a = [ 1,2,3,4,-10 ];
console.log(maxSum(a));
a=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSum(a));

function maxSubarraySum(arr, size)
{
    let currSum = 0, maxSum = Number.MIN_VALUE;
    for (let i = 0; i < size; i++) {

        if (arr[i] <= currSum + arr[i]) {
            currSum += arr[i];
        }

        else {
            currSum = arr[i];
        }
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
}
console.log(maxSubarraySum(a,9));

