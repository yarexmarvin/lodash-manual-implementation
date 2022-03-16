import { differenceBy } from "../tasks/differenceBy";

test("difference by a function", () => {
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([1.2]);
});

test("difference by a property", () => {
  expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x")).toStrictEqual([
    { x: 2 },
  ]);
});
