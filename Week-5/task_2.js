function isVowel(char)
{
    return "aeiou".includes(char);
}
function vowelCount(str)
{const vowelMap=new Map();
    for(let char of str){
        let lowerCaseChar=char.toLowerCase();
        let index = str.indexOf(lowerCaseChar);
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(index,vowelMap.get(lowerCaseChar)+1);
                }
                else{
                    vowelMap.set(index,1);
                    }
            }
        }
                return vowelMap;
}

const val = vowelCount('shubham');
console.log(val);