

export default function take(arr, length){
    let size = length === undefined? 1 : length;
    return arr.slice(0,size);
}

