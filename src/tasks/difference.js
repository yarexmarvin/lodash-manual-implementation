

export function difference(arr, values){
    return arr.filter(element => values.indexOf(element) === -1);
}


