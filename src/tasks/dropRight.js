export default function dropRight(arr , num=1){
    arr.splice(-num, num);
    return arr;
}