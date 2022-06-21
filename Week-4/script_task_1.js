function getNumber(){
    return Math.trunc(Math.random()*100);
}

const myPromise = new Promise((resolve, reject) => {
    const num = getNumber();
    setTimeout(() => {
        if(num % 5==0){
            reject(`rejected because it is dividable ${num}`);
        }
        else{
            resolve(`resolve because it is not dividable ${num}`);
        }
      
    }, 3000);
  });

  myPromise.then(console.log)
  .catch(console.log)
  .finally(console.log('completed'));