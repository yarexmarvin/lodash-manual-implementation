import dropRightWhile from "../tasks/dropRightWhile";

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

var usersResult2 = [
  { user: "barney", active: true },
];

var usersResult3 = [
    { user: "barney", active: true },
    { user: "fred", active: false },
];


test("drop by property", () => {
  expect(dropRightWhile(users, "active")).toEqual(users);
});

test("drop by property  and value", () => {
  expect(dropRightWhile(users, ['active', false])).toEqual(usersResult2);
});

test("drop by element", () => {
  expect(dropRightWhile(users, { 'user': 'pebbles', 'active': false })).toEqual(usersResult3);
});

test("drop by func", () => {
  expect(dropRightWhile(users, function(o) { return !o.active; })).toEqual(usersResult2);
});
