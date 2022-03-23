const fromPairs = (pairs) =>
  pairs.reduce((obj, pair) => {
    obj[pair[0]] = pair[1];
    return obj;
  }, {});

export default fromPairs;
