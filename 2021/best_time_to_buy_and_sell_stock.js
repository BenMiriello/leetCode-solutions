const maxProfit = (prices) => {
  return 'big profits: ' + prices
}

const tests = [
  {
    args: 'a gorillion dollars',
    expected: 'big profits: a gorillion dollars'
  },
];

module.exports = {
  name: 'Best time to buy and sell stocks',
  method: maxProfit,
  tests
};
