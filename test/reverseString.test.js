import reverseString from '../code/reverseString';

test('empty', () => {
    expect(reverseString('')).toBe('');
});

test('only letter', () => {
    expect(reverseString('ababa')).toBe('ababa');
});

test('punctuation', () => {
    expect(reverseString('1,.2')).toBe('2.,1');
});
