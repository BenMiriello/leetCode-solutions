/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');
const isAnagram = (s, t) => {
    if (s.length != t.length) {
        return false
    };

    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
        map[t[i]] ? map[t[i]]-- : map[t[i]] = -1;
    }
    
    for (let char in map) {
        if (map[char] != 0) {
            return false
        };
    }
    
    return true;
}