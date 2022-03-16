export default function concat(...args){
    let result = [];

    for(let element of args){

        if(Array.isArray(element)){
            result.push(...element);
            continue;
        } 
        result.push(element);
    }

    return result;
}

