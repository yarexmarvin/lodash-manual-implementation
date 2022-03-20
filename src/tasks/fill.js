

export default function fill(arr, value, from = 0, to){
    let modifiedTo = to === undefined? arr.length : to;

    return Array.from(arr).map((element, index)=>{
        if(index >= from && index < modifiedTo){
            return value
        } else {
            return element
        }
    })
}


