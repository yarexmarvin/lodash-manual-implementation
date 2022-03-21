export default function dropRightWhile(arr, condition) {
    return arr.reduceRight((result, element)=>{

        if(typeof condition === 'string'){
            let check = element.hasOwnProperty(condition);
            if(check){
                result.unshift(element)
            }
            return result;
        } else if(Array.isArray(condition)){
            let check = element[condition[0]] !== condition[[1]];
            if(check){
                result.unshift(element)
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
                result.unshift(element)
            }
            return result

        } else if(typeof condition === 'function'){
            if(!condition(element)){
                result.unshift(element)
            }
            return result
        }


    },[])
}
