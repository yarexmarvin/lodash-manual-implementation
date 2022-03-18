import dropWhile from "../tasks/dropWhile";

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

var usersResult2 = [
    { 'user': 'pebbles', 'active': true }
];

var usersResult3 = [
    { 'user': "fred", 'active': false },
    { 'user': 'pebbles', 'active': true }
];


test("drop by property", () => {
  expect(dropWhile(users, "active")).toEqual(users);
});

test("drop by property  and value", () => {
  expect(dropWhile(users, ['active', false])).toEqual(usersResult2);
});

test("drop by element", () => {
  expect(dropWhile(users, { 'user': 'barney', 'active': false })).toEqual(usersResult3);
});

test("drop by func", () => {
  
  expect(dropWhile(users, function(o) { return !o.active; })).toEqual(usersResult2);
});
