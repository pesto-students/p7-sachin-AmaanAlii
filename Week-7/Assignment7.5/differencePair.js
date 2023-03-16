function differencePair(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (Math.abs(A[i] - A[j]) == B) {
        return 1;
      }
    }
  }
  return 0;
}

console.log(differencePair([5, 10, 3, 2, 50, 80], 78));
console.log(differencePair([-10, 20], 30));

// Time Complexity - O(n^2)
// Space Complexity - O(1)

// Optimized Solution -

function differencePair2(A, B) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    let target1 = A[i] - B;
    let target2 = A[i] + B;
    if (set.has(target1) || set.has(target2)) {
      return 1;
    }
    set.add(A[i]);
  }
  return 0;
}

console.log(differencePair2([5, 10, 3, 2, 50, 80], 78));
console.log(differencePair2([-10, 20], 30));

// Time Complexity - O(n)
// Space Complexity - O(n)
