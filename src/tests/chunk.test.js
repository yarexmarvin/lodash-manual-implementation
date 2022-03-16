import chunk from "../tasks/chunk";

test("chunk division 2", () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7],
  ]);
});

test("chunk division 5", () => {
  expect(chunk([1, 2, 3, 4], 5)).toStrictEqual([[1, 2, 3, 4]]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toStrictEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ]);
});

test("chunk division 5", () => {
  expect(chunk(["1", "a", "b", "t", "m"], 2)).toStrictEqual([
    ["1", "a"],
    ["b", "t"],
    ["m"],
  ]);
});

test("chunk invalid length", () => {
  expect(() => chunk([1, 2, 3, 4, 5], -1)).toThrowError("invalid length");
});
