const write = require('write');

const { camelize } = require('./utilities');

const filename = process.argv[2];
const funcname = process.argv[3] || camelize(filename);

write.sync(`2021/${filename.replace(' ', '_')}.js`, 
`const ${funcname} = () => {};

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
