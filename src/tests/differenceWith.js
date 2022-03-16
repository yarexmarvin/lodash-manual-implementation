import isEqual from "../tasks/isEqual.js"

test('difference with', ()=>{
    expect(differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], isEqual)).toStrcitEqual([{ 'x': 2, 'y': 1 }])
})