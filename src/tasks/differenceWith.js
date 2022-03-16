import isEqual from "./isEqual.js";

export function differenceWith(array, values, comparator){
    return array.filter(element => !values.some(value => comparator(element, value)));
}

