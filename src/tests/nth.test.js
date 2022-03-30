import nth from "../tasks/nth";

it('nth', () => {
    expect(nth([1,2,3],1)).toEqual(2);
});
it('nth', () => {
    expect(nth([1,2,3],-1)).toEqual(3);
});