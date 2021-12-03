import calculator from '../code/calculator';

test('add', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('divide by 0', () => {
    expect(calculator.divide(1, 0)).toBeNaN();
});

test('multiplay', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});
