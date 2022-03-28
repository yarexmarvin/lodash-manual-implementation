import join from "../tasks/join";


it('join', () => {
    expect(join([1,2,3], '~')).toEqual('1~2~3');
});