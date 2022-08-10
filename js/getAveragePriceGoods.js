'use strict';

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
  let averagePriceGoods = [];
  for (let i = 0; i < arr.length; i++) {
    let average;
    average = Math.round(arr[i][1] / arr[i][0]);
    averagePriceGoods.push(average);
  }
  return averagePriceGoods;
}

console.log(getAveragePriceGoods(allCashbox));
