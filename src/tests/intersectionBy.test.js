import intersectionBy from "../tasks/intersectionBy";

it("intersection By", () => {
  expect(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")).toStrictEqual([
    { x: 1 },
  ]);
});
it("intersection By", () => {
  expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([
    2.1,
  ]);
});
