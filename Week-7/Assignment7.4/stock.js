function stockProfit(arr) {
  let i = 0;
  let min = arr[0];
  let max;
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  max = min;

  for (let i = minIndex + 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  if (max > min) {
    let profit = max - min;
    return profit;
  } else return 0;
}

console.log("Profit = ", stockProfit([7, 1, 5, 3, 6, 4]));
console.log("Profit = ", stockProfit([7, 6, 4, 3, 1]));

// Time Complexity - O(n)
// Space Complexity - O(1)
