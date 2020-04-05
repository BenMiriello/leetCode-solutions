var maxProfit = function(prices) { 
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] === prices[i + 1]) {
            prices.splice(i,1)
            i--
        }
    }

    let profit = 0
    
    if (prices[0] < prices[1]) {
        profit -= prices[0]
    }
    
    for (let i = 1; i < prices.length - 1; i++) {
        if (prices[i - 1] > prices[i] && prices[i] < prices [i + 1]) {
            profit -= prices[i]
        } else if (prices[i - 1] < prices[i] && prices[i] > prices [i + 1]) {
            profit += prices[i]
        }
    }
    
    if (prices[prices.length - 1] > prices[prices.length - 2]) {
        profit += prices[prices.length - 1]
    }

    return profit
};

console.log(maxProfit([7,1,5,3,6,4]) === 7)
console.log(maxProfit([1,2,3,4,5]) === 4)
console.log(maxProfit([7,6,4,3,1]) === 0)
console.log(maxProfit([2,2,5]) === 3)
console.log(maxProfit([6,1,3,2,4,7]) === 7)
console.log(maxProfit([3,3,5,0,0,3,1,4]) === 8)
console.log(maxProfit([8,3,6,2,8,8,8,4,2,0,7,2,9,4,9]) === 28)