import fill from "../tasks/fill";

test("fill classic", () => {
  expect(fill([1, 2, 3], "a")).toStrictEqual(["a", "a", "a"]);
});
test("fill with from-argument", () => {
  expect(fill([1, 2, 3], "a", 1)).toStrictEqual([1, "a", "a"]);
});
test("fill with  from+to", () => {
  expect(fill([1, 2, 3], "a", 0, 1)).toStrictEqual(["a", 2, 3]);
});

test("fill ", () => {
  expect(fill(Array(3), 3)).toStrictEqual([3, 3, 3]);
});
