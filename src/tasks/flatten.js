

export default function flatten(arr){
    let result = [];

    for(let element of arr){
        if(Array.isArray(element) && arr.length){
           result = [...result, ...element]
        } else {
            result = [...result, element]
        }
    }
    return result;
}


