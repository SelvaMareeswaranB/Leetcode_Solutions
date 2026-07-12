function maxProfit(prices) {
    let maxProfit = 0
    let lowPrice = prices[0]

    for (let i = 1; i < prices.length; i++) {
        maxProfit=Math.max(maxProfit,prices[i] - lowPrice)
       lowPrice = Math.min(lowPrice, prices[i])

    }

    return maxProfit

};