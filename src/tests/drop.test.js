import drop from "../tasks/drop"


test('drop 0', ()=>{
    expect(drop([1,2,3],0)).toStrictEqual([1,2,3]);
})
test('drop 1', ()=>{
    expect(drop([1,2,3],1)).toStrictEqual([2,3]);
})
test('drop 4', ()=>{
    expect(drop([1,2,3],4)).toStrictEqual([]);
})