/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {
            if (haystack.slice(i, i + needle.length) === needle) return i;
        }
    }
    return -1;
};

 
 
// var strStr = function(haystack, needle) {
//     if (needle.length === 0) return 0;
//     if (needle.length > haystack.length) return -1;
//     for (let i = 0; i < haystack.length; i++) {
//         if (needle[0] === haystack[i]) {
//             let match = true;
//             for (let j = i; j < needle.length + i; j++) {
//                 if (haystack[j] !== needle[j - i]) {
//                     match = false;
//                     i = j;
//                     break;
//                 }
//             }
//             if (!!match) return i;
//         }
//     }
//     return -1;
// };
