let done = false;
let a;
let cur;
let max;

const longestPalindrome = (s) => {
  a = s.split('');
  max = [];
  for (let i = 0; i < a.length; i += 1) {
    cur = [];
    cur[i] = a[i];
    let length = Math.max(a.length / 2);
    done = false;
    console.log('starting from ', i, cur)
    for (let j = 1; j <= length; j += 1) {
      if (check(i + j)) break;
      console.log(cur);
      if (check(i + (j + -1))) break;
      console.log(cur);
    }
  }
  return max.join('');
};

const check = (n) => {
  if (!a[n]) return true;
  console.log('bef', n, cur[n], a[n])
  cur[n] = a[n];
  console.log('aft', n, cur[n], a[n])
  if (isPalindrome(cur) && cur.length > max.length) {
    max = cur;
  }
};

const isPalindrome = (a) => a.join('') === a.reverse().join('');

const tests = [
  // {
  //   input: ['babad'],
  //   expected: 'bab'
  // },
  // {
  //   input: ['cbbd'],
  //   expected: 'bb'
  // },
  // {
  //   input: ['bb'],
  //   expected: 'bb'
  // },
  {
    input: ['abcba'],
    expected: 'abcba'
  }
  // {
  //   input: ['abba'],
  //   expected: 'abba'
  // }
  // {
  //   input: ['civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'],
  //   expected: 'ranynar'
  // }
]

module.exports = {
  name: 'longest_palindromic_substring',
  method: longestPalindrome,
  tests
};

// const longestPalindrome = (s) => {
//   const a = s.split('');
//   let longest = [a[0]];
//   let current = [];
//   for (let i = 0; i < a.length; i += 1) {
//     for (let j = i + 1; j <= a.length; j += 1) {
//       current = a.slice(i, j);
//       if (isPalindrome(current)) {
//         if (current.length > longest.length) {
//           longest = current;
//         }
//       }
//     }
//   }
//   return longest.join('');
// };
