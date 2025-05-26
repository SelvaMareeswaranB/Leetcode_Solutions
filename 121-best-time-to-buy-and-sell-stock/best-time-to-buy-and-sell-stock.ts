function maxProfit(prices: number[]): number {
    let maximumProfit =0
    let minPrice =prices[0]
  for(let i=1;i<prices.length;i++){
    maximumProfit = Math.max((prices[i]-minPrice),maximumProfit)
    minPrice = Math.min(minPrice,prices[i])
  }
 
    return maximumProfit
};