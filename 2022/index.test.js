const Problems = require('./index.js');

for (const key in Problems) {
  const { name, method, tests } = Problems[key];

  describe(name, () => {
    for (const test of tests) {
      const input = JSON.stringify(test.input);
      const expected = JSON.stringify(test.expected);
      it(`${method.name}(${input}) //=> ${expected}`, () => {
        expect(method(...test.input)).toStrictEqual(test.expected);
      });
    }
  });
};
