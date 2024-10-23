/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let cash = 0; // Maximum profit we can have without holding stock
    let hold = -prices[0]; // Maximum profit we can have while holding stock

    for (let i = 1; i < prices.length; i++) {
        // Update cash and hold states
        cash = Math.max(cash, hold + prices[i] - fee); // Sell stock and add profit after fee
        hold = Math.max(hold, cash - prices[i]); // Buy stock

        // Debug statements to trace the values
    }

    return cash;

};