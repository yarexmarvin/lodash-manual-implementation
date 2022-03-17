export default function dropWhile(arr, condition) {
    let result = [];
     arr.forEach((element)=>{

        if(typeof condition === 'string'){
            let check = element.hasOwnProperty(condition);
            if(check){
                result.push(element)
            }
            return result;
        } else if(Array.isArray(condition)){
            let check = element[condition[0]] !== condition[[1]];
            if(check){
                result.push(element)
            }
            return result

        } else if(typeof condition === 'object' ){
            let check = false;
            for(let key in condition){
                if(condition[key] !== element[key]){
                    check = true;
                }
            }
            if(check){
                result.push(element)
            }
            return result

        } else if(typeof condition === 'function'){
            if(!condition(element)){
                result.push(element)
            }
            
        }
    })
    return result

}

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

console.log(dropWhile(users, { 'user': 'pebbles', 'active': false }));