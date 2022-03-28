import intersection from "../tasks/intersection";

it("intersection", () => {
  expect(intersection([1, 2, 3], [2, 3], [3, 1, 2])).toStrictEqual([2, 3]);
});
