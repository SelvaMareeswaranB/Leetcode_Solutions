function maxProfit(prices) {
    let maxProfit = 0
    let lowPrice = prices[0]

    for (let i = 1; i < prices.length; i++) {
        lowPrice = Math.min(lowPrice, prices[i])
        maxProfit=Math.max(maxProfit,prices[i] - lowPrice)
    }

    console.log(lowPrice,maxProfit)
    return maxProfit

};