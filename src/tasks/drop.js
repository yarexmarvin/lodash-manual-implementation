export default function drop(arr, num = 1) {
  arr.splice(0, num);
  return arr;
}
