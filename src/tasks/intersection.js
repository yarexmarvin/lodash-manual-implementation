export default function intersection(...arrays) {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      let check = arrays.every((array) => array.includes(arrays[i][j]));
      if (check && !result.includes(arrays[i][j])) {
        result.push(arrays[i][j]);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
