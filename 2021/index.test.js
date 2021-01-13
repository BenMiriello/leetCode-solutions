const Problems = require('./index.js');

for (const key in Problems) {
  const problem = Problems[key];

  test(problem.name, () => {
    for (const test of problem.tests) {
      expect(problem.method(test.args)).toBe(test.expected);
    }
  });
};
