export default function isEqual(object, other){
    let flag = true;
    for(let element in object){
        if(object[element] !== other[element]){
            flag = false;
        }
    }
    return flag;
}
