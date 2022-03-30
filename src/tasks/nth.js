export default function nth(array, n) {
  let index = 0;
  if (n < 0) {
    index = array.length + n;
  } else {
    index = n;
  }
  return array[index];
}
