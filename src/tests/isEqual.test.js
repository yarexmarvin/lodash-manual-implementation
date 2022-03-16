import isEqual from "../tasks/isEqual"


test('are equal objects', () => {
    expect(isEqual({a: 1}, {a: 1})).toBeTruthy();
})

test('are not equal object', ()=>{
    expect(isEqual({a: 1}, {b: 1})).toBeFalsy();
})