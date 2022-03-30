import pull from "../tasks/pull";

it('pull', () => {
    expect(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')).toStrictEqual(['b', 'b']);
});