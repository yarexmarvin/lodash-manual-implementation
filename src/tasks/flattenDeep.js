
// export default function flattenDeep(arr, result = []) {

//   if (Array.isArray(arr)) {
//     for (let element of arr) {
//       flattenDeep(element, result);
//     }
//   } else {
//     return result.push(arr);
//   }

//   return result;
// }


// shorter way
const flattenDeep = (arr) =>  arr.flatMap(element => Array.isArray(element)? flattenDeep(element): element);

export default flattenDeep