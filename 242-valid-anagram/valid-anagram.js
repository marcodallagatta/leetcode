/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return JSON.stringify([...s].sort()) === JSON.stringify([...t].sort());
};