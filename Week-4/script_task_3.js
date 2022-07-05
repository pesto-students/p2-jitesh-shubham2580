const fib = {
    num : 5,
    [Symbol.iterator] : ()=>{
        let back2 =1;
        let back1 =0;
        let curr = 0;
        return{
            next:()=>{
                    curr = back1+back2;
                    back2 = back1;
                    back1= curr;
                    return { value : back2, done : false};
               
            }
        }
    }
}
// let fib1 = fib.[Symbol.iterator](5);
for(let n of fib){
    if(n>10){
        break;
    }
    console.log(n);
   
}