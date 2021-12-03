const charCode_a = 'a'.charCodeAt(0);
const charCode_z = 'z'.charCodeAt(0);
const charCode_A = 'A'.charCodeAt(0);
const charCode_Z = 'Z'.charCodeAt(0);

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

/**
 * @param {string} char
 * @param {number} offset
 */
function getShiftedCharCode(char, offset) {
    const originalCharCode = char.charCodeAt(0);
    if (!isLetter(char)) return originalCharCode;

    // a~z
    if (originalCharCode >= charCode_a && originalCharCode <= charCode_z) {
        if(originalCharCode + offset < charCode_a) return originalCharCode + offset + 26
        if(originalCharCode + offset > charCode_z) return originalCharCode + offset - 26
        return originalCharCode + offset
    }

    // A~Z
    if (originalCharCode >= charCode_A && originalCharCode <= charCode_Z) {
        if(originalCharCode + offset < charCode_A) return originalCharCode + offset + 26
        if(originalCharCode + offset > charCode_Z) return originalCharCode + offset - 26
        return originalCharCode + offset
    }
}

/**
 * @param {string} str
 * @param {number} n
 */
export default function caesarCipher(str, n) {
    const charCodeArr = [];
    const offset = n % 26;
    for (let i = 0; i < str.length; i++) {
        charCodeArr.push(getShiftedCharCode(str.at(i), offset));
    }
    const result = String.fromCharCode(...charCodeArr);
    return result;
}
