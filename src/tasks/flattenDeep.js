
export default function flattenDeep(arr, result = []) {

  if (Array.isArray(arr)) {
    for (let element of arr) {
      flattenDeep(element, result);
    }
  } else {
    return result.push(arr);
  }

  return result;
}
