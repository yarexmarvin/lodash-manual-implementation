import indexOf from "../tasks/indexOf";

it("index of", () => {
  expect(indexOf([1, 2, 3, 4, 2], 2, 2)).toBe(4);
});
it("index of", () => {
  expect(indexOf([1, 2, 3, 4, 2], 2)).toBe(1);
});
it("index of", () => {
  expect(indexOf([1, 2, 3, 4, 2], 2, 4)).toBe(4);
});
