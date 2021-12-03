import captialize from '../code/captialize';

test('no captialized', () => {
    expect(captialize('hello world')).toBe('Hello world');
});

test('captialized', () => {
    expect(captialize('Hello, World')).toBe('Hello, World');
});

test('empty', () => {
    expect(captialize('')).toBe('');
});
