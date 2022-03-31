
export default function camelCase(str){
    let words = str.match(/\w+/gi);
    let formatedWords = words.map((element,index)=>{
        if(index === 0){
            return element.toLowerCase();
        }
        return element.slice(0,1).toUpperCase() + element.slice(1,).toLowerCase();
    });
    return formatedWords.join('');
}
