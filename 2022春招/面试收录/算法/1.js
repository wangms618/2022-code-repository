/**
 * @param {number[]} prices
 * @return {number}
 */
//  先定义最低价格和利润
// 遍历数组，更新最低价格和利润
// 最后遍历完成，返回利润
var maxProfit = function(prices) {
  // 最小利润
  let profit = 0
  // 最小股价
  let price = Infinity
  for(let i=0;i<prices.length;i++){
      if(prices[i]<price){
          price = prices[i]
      }
      if((prices[i]-price)>profit){
          profit = prices[i]-price
      }
  }
  return profit
};