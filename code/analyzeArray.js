/**
 * @param {number[]} arr
 */
export default function analyzeArray(arr) {
    if (arr.length === 0)
        return {
            average: 0,
            min: 0,
            max: 0,
            length: 0,
        };
    const sortArr = arr.slice().sort((a, b) => a - b);
    const sum = sortArr.reduce((total, val) => total + val, 0);
    return {
        average: sum / sortArr.length,
        min: sortArr.at(0),
        max: sortArr.at(-1),
        length: sortArr.length,
    };
}
