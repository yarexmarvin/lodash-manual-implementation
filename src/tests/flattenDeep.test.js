import flattenDeep from "../tasks/flattenDeep";

test("deep flatten", () => {
  expect(flattenDeep([1, 2, 3, [4, [5, [6], [7], 8], 9], 10])).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});
