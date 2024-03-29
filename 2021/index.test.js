const Problems = require('./index.js');

for (const key in Problems) {
  const problem = Problems[key];

  xdescribe(problem.name, () => {
    for (const test of problem.tests) {
      it(`${problem.method.name}(${test.input}) //=> ${test.expected}`, () => {
        expect(problem.method(...test.input)).toStrictEqual(test.expected);
      })
    }
  });
};
