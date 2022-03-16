

export function differenceBy(arr, values, iterator){
    return arr.filter(element => {
        if(typeof iterator === 'function'){
            let changedValues = values.map( value => iterator(value));
            return changedValues.indexOf(iterator(element)) === -1
        } else {
            let same = values.find(x=> x[iterator] === element[iterator]);
            return !same;
        }
    })
}



