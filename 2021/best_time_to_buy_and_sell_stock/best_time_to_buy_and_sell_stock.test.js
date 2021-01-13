const maxProfit = require('./best_time_to_buy_and_sell_stock');

test("Best time to buy and sell stock", () => {
  for (const test of maxProfit.tests) {
    expect(maxProfit.maxProfit(test.args)).toBe(test.expected);
  }
});
