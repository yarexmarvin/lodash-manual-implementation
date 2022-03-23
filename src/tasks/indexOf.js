
const indexOf = (arr, value, from = 0) => {
    for(let i = from; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }    
}

export default indexOf;