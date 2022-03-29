export default function lastIndexOf(arr, value, from = 0) {
  let counter = -1;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === value) {
       counter+=1
    } else {
        counter++;
    }
  }
  return counter;
}
