import analyzeArray from '../code/analyzeArray';

test('Integer', () => {
    expect(analyzeArray([1, 2, 3, 4, -5])).toEqual({
        average: 1,
        min: -5,
        max: 4,
        length: 5,
    });
});

test('Float point', () => {
    const arr = analyzeArray([0.5, 0.5, 0.5, -0.5, 1.5, 0.5]);
    expect(arr.min).toBeCloseTo(-0.5);
    expect(arr.max).toBeCloseTo(1.5);
    expect(arr.length).toBe(6);
    expect(arr.average).toBeCloseTo(0.5);
});

test('Empty', () => {
    expect(analyzeArray([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    });
});
