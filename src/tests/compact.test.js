import compact from "../tasks/compact"

test('compact', ()=>{
    expect(compact([1,2,3,0,'', NaN, undefined, 4, 5, null, false])).toStrictEqual([1,2,3,4,5]);
})