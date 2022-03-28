import initial from "../tasks/initial";

it("initial", () => {
  expect(initial([1, 2, 3])).toStrictEqual([1, 2]);
});
