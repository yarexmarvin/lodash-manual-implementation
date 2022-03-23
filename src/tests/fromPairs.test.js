import fromPairs from "../tasks/fromPairs";

let pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
let result = {
  a: 1,
  b: 2,
  c: 3,
};

test("from pairs", () => {
  expect(fromPairs(pairs)).toStrictEqual(result);
});
