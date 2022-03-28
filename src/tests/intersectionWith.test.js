import intersectionWith from "../tasks/intersectionWith";
import isEqual from "../tasks/isEqual";

var objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  var others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];

it('intersection with', () => {
    expect(intersectionWith(objects, others, isEqual)).toStrictEqual([ { x: 1, y: 2 } ]);
});