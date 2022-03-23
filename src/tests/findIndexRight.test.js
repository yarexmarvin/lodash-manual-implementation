import findIndexRight from "../tasks/findIndexRight";

const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];


test('findIndex func', ()=>{
    expect(findIndexRight(users, function(o) { return o.user == 'pebbles'; })).toBe(2)
})
test('findIndex obj', ()=>{
    expect(findIndexRight(users, { 'user': 'barney', 'active': true })).toBe(0)
})
test('findIndex prop + value', ()=>{
    expect(findIndexRight(users,  ['active', false])).toBe(2)
})
test('findIndex prop ', ()=>{
    expect(findIndexRight(users, 'active')).toBe(0)
})