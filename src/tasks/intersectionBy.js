export default function intersectionBy(arr1, arr2, comparator) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (exclude(arr1[i], arr2, comparator)) {
      result.push(arr1[i]);
    }
  }

  return result;
}

function exclude(value, arr, comparator) {
  if (typeof comparator === "function") {
    return arr.find((x) => comparator(x) === comparator(value));
  } else if (typeof comparator === "string") {
    return arr.find((x) => x[comparator] === value[comparator]);
  }
}


