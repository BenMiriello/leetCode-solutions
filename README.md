# Algorithm Solutions

Solutions in 2020 have their own custom test methods or none at all.

Solutions in 2022 all get automatically run through `2022/index.test.js`.

## Testing

To have tests run whenever saving the file you're working on, run: 
```jest --watch-all```

In order to make new 2022 test-compliant:
- Declare a variable 'tests' as an array of test objects, each with an input and expected value. For example:
```
const tests = [
  {
    input: [arg1, arg2],
    expected: 'the correct output for this input'
  },
  ...
] 
```
  - Note that inputs must be contained in an array, even if there is just one input, and even if an input argument is an array itself.

- Export your test and arguments this way:
```
module.exports = {
  name: 'The name of the problem',
  method: solutionMethod,
  tests
}
```
