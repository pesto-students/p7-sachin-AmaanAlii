function threeSumClosest(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  let result = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));

// Time Complexity - O(n^2) - because of the 2 nested loops.
// Space Complexity - O(1) - because we just use one additional variable
