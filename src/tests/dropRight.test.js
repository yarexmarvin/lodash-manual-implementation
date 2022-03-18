import dropRight from "../tasks/dropRight";

test('drop right 0', () => {
    expect(dropRight([1,2,3],0)).toStrictEqual([1,2,3]);
})
test('drop right 1', () => {
    expect(dropRight([1,2,3],1)).toStrictEqual([1,2]);
})
test('drop right 4', () => {
    expect(dropRight([1,2,3],4)).toStrictEqual([]);
})