"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = metriclcs;
/**
 * Return the length of Longest Common Subsequence (LCS) between strings s1
 * and s2.
 * Inspired by https://github.com/tdebatty/java-string-similarity/blob/1afdc76eef523b144c73be3c3fc7df88f93fe9b7/src/main/java/info/debatty/java/stringsimilarity/LongestCommonSubsequence.java
 * @param {string} s1
 * @param {string} s2
 * @returns {number} Length of the LCS
 */
function lcsLength(s1, s2) {
    const s1_length = s1.length;
    const s2_length = s2.length;
    //init array
    const c = Array(s1_length + 1).fill(Array(s2_length + 1).fill(0));
    for (let i = 1; i <= s1_length; i++) {
        for (let j = 1; j <= s2_length; j++) {
            c[i][j] =
                s1[i - 1] === s2[j - 1]
                    ? c[i - 1][j - 1] + 1
                    : Math.max(c[i][j - 1], c[i - 1][j]);
        }
    }
    return c[s1_length][s2_length];
}
/**
 * Returns a number between 1 and 0, where 1 means they are exactly the same and 0 means no common subsequences.
 * If either string is not a string, returns NaN
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
function metriclcs(s1, s2) {
    if (typeof s1 !== "string" || typeof s1 !== "string")
        return NaN;
    if (s1 === s2)
        return 1;
    const mlen = Math.max(s1.length, s2.length);
    if (mlen === 0)
        return 1;
    return lcsLength(s1, s2) / mlen;
}
module.exports = metriclcs;
