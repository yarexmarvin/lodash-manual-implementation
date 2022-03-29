import lastIndexOf from "../tasks/lastIndexOf";

it('last index of', () => {
    expect(lastIndexOf([1,2,3,4,5,2,3,4,2], 2)).toBe(8);
});
it('last index of', () => {
    expect(lastIndexOf([1,2,3,4,5,2,3,4,2], 2,2)).toBe(6);
});