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
  let summa = 0;
  let count = 0;
  
  for (const key in arr) {
    count += arr[key][0];
    summa += arr[key][1];
  }

  let average;
  average = Math.round(summa / count);
  return average;
}

console.log(getAveragePriceGoods(allCashbox));
