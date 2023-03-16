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
