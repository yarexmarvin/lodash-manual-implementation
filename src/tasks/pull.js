
export default function pull(array, ...args){
    return array.filter(element => !args.includes(element));
}


