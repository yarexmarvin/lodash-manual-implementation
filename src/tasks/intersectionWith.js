import isEqual from "./isEqual.js";

export default function intersectionWith(arr1, arr2, fn) {
  return arr1.filter((element1, index) => {
    return arr2.some((element2) => fn(element1, element2));
  });
}
