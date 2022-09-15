"use strict";

function getCash(amount) {
  const banknotes = [500, 200, 100, 50, 20, 5, 2, 1];
  let newArr = [];
  if (amount > 0) {
    for (let i = 0; i < banknotes.length; i++) {
      while (amount - banknotes[i] >= 0) {
        amount -= banknotes[i];
        newArr.push(banknotes[i]);
      }
    }
    return newArr;
  }
}
console.log(getCash(874)); // [500, 200, 100, 50, 20, 2, 2
console.log(getCash(1502));
