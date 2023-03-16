function conSubArray(A) {
  let maxsum = 0;
  let maxnow = 0;
  for (let i = 0; i < A.length; i++) {
    maxnow = maxnow + A[i];
    if (maxnow > maxsum) {
      maxsum = maxnow;
    } else if (maxnow < 0) {
      maxnow = 0;
    }
  }
  return maxsum;
}

console.log(conSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Time Complexity - O(n)
// Space Complexity - O(1)
