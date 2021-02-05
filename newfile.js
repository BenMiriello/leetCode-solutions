const write = require('write');

const { camelize } = require('./utilities');

const filename = process.argv[2];
const funcname = process.argv[3] || camelize(filename);

let argIdx = 4;
const args = [];
while (process.argv[argIdx]) {
  args.push(process.argv[argIdx]);
  argIdx += 1;
}

write.sync(`2021/${filename.replace(' ', '_').toLowerCase()}.js`, 
`const ${funcname} = (${process.argv[4] || ''}${process.argv[5] ? ', ' + process.argv[5] : ''}${process.argv[6] ? ', ' + process.argv[6] : ''}${process.argv[7] ? ', ' + process.argv[7] : ''}) => {};

const tests = [
  {
    input: [],
    expected: null
  },
  {
    input: [],
    expected: null
  },
  {
    input: [],
    expected: null
  }
]

module.exports = {
  name: '${filename}',
  method: ${funcname},
  tests
}`
);
