export default function chunk(arr, length = 1) {

    if(length <= 0){
        throw new Error('invalid length');
    }

  const result = [];

  for (let i = 0; i < arr.length; i += length) {
    result.push(arr.slice(i, length + i));
  }
  return result;
}

