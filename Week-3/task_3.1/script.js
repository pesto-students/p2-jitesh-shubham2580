'use strict';
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const output = document.getElementById('output');

function add(a,b){
    return a+b;
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args.toString(); 
      if (n in cache) {
        console.log('Fetching from cache');
        return cache[n];
      }
      else {
        console.log('Calculating result');
        let result = fn(...args);
        cache[n] = result;
        return result;
      }
    }
}

const memoizeAdd=memoize(add);
time(()=>{
    const cal =memoizeAdd(100,100);
    console.log(cal);
});
time(()=>memoizeAdd(100,100));
time(()=>memoizeAdd(200,200));
time(()=>memoizeAdd(200,200));
