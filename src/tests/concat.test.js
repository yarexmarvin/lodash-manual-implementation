import concat from "../tasks/concat"

test('concat', ()=>{
    expect(concat([1], 2, [[3]])).toStrictEqual([1,2,[3]]);
})