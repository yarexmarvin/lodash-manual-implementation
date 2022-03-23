import findIndex from "../tasks/findIndex"
const users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

test('findIndex func', ()=>{
    expect(findIndex(users, function(o) { return o.user == 'barney';})).toBe(0)
})
test('findIndex obj', ()=>{
    expect(findIndex(users, { 'user': 'fred', 'active': false })).toBe(1)
})
test('findIndex prop + value', ()=>{
    expect(findIndex(users, ['active', false])).toBe(0)
})
test('findIndex prop ', ()=>{
    expect(findIndex(users, 'active')).toBe(2)
})