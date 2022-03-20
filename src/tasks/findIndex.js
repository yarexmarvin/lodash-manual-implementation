
export default function findIndex(arr, condition, from = 0){
   
    for(let i = from; i < arr.length; i++){

        if(validation(arr[i], condition)){
            return i;
        }

    }

}


function validation(element, condition){
    if(typeof condition === 'function'){
        return condition(element);
    } else if(Array.isArray(condition)){
        return element[condition[0]] === condition[1];
    } else if(typeof condition === 'object'){
        let flag = true;
        for(let key in condition){
            if(element[key] !== condition[key]){
                flag =false;
            }
        }
        return flag;
    } else {
        return condition in element && !!element[condition];
    }
}
