
function print(metrix){
    let endingRowPoint=arr.length;
    let endingColumnPoint= arr[0].length;
    let startingRowPoint=0;
    let startingColumnPoint=0
    
    while(startingRowPoint<endingRowPoint && startingColumnPoint<endingColumnPoint){
        for(let i=startingColumnPoint; i<endingColumnPoint;i++){
            console.log("a")
            console.log(arr[startingRowPoint][i]+"_");
        }
        startingRowPoint++;
        console.log("row printed")

        for(let i=startingRowPoint;i<endingRowPoint;i++){
            console.log("b")
            console.log(arr[i][endingColumnPoint-1]+"_");
        }
        endingColumnPoint--;
        console.log("column printed")

        if(startingRowPoint<endingRowPoint){
            for(let i=endingColumnPoint-1; i>=startingColumnPoint;i--){
                console.log("c")
                console.log(arr[endingRowPoint-1][i]+"_")
            }
        }
        endingRowPoint--;
        console.log("rev row printed")

        if(startingColumnPoint<endingColumnPoint){
            for(let i=endingRowPoint-1;i>=startingRowPoint;i--){
                console.log("d")
                console.log(arr[i][startingColumnPoint]+"_")
            }
        }
        startingColumnPoint++;
      
        console.log("rev column printed")
    }
}
let arr = [[ 1, 2, 3, 4 ],
     [ 5, 6, 7, 8 ],
     [ 9, 10, 11, 12 ],
     [ 13, 14, 15, 16 ],
     [ 17, 18, 19, 20 ]];

console.log(print(arr));