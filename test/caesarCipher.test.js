import caesarCipher from '../code/caesarCipher';

test('works with single letters', () => {
    expect(caesarCipher('A', 1)).toBe('B');
});
test('works with words', () => {
    expect(caesarCipher('Aaa', 1)).toBe('Bbb');
});
test('works with phrases', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});
test('works with negative shift', () => {
    expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});
test('wraps', () => {
    expect(caesarCipher('Z', 1)).toBe('A');
});
test('works with large shift factors', () => {
    expect(caesarCipher('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});
test('works with large negative shift factors', () => {
    expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});

test('keeps same', () => {
    expect(caesarCipher('abc', 0)).toBe('abc');
});
