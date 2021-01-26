const containsDuplicate = (nums) => {

};

const tests = [
  {
    input: [[1,2,3,1]],
    output: true
  },
  {
    input: [[1,2,3,4]],
    output: false
  },
  {
    input: [[1,1,1,3,3,4,3,2,4,2]],
    output: true
  }
];

module.exports = {
  name: 'Contains Duplicate',
  method: containsDuplicate,
  tests
};
