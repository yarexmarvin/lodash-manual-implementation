import flatten from "../tasks/flatten";

test("flatten arr", () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, [3, [4]], 5]);
});

it("should ", () => {
  expect(flatten([1, 1, [2, [3, [4]], 5]])).toEqual([
    1,
    1,
    2,
    [3, [4]],
    5,
  ]);
});
