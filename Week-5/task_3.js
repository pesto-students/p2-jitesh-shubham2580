let arr= [1,5,-1,4]
const hasDublicate= (arr)=>{
    let set = new Set(arr);
    console.log(arr.length);
    console.log(set.size);
    return set.size!==arr.length;
}
console.log(hasDublicate(arr));