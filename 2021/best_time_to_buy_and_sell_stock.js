const addOrDont = (before, current) => {
  if (current <= before) return 0;
  return current - before;
};

const maxProfit = (prices) => {
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    max += addOrDont(prices[i - 1], prices[i])
  };

  return max;
};

//--------------------------------------------------

const tests = [
  {
    input: [7,1,5,3,6,4],
    expected: 7
  },
  {
    input: [1,2,3,4,5],
    expected: 4
  },
  {
    input: [7,6,4,3,1],
    expected: 0
  }
];

module.exports = {
  name: 'Best time to buy and sell stocks',
  method: maxProfit,
  tests
};
