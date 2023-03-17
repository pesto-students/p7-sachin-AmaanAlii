// Objective - Find the Town Judge

// Time Complexity - O(n+m), where n is the number of people and m is the number of trust relationships in the trust array
// Space Complexity - O(n), because we create two arrays of length n+1 to store the trust and trust relationship counts for each person

// Solution -

function findJudge(n, trust) {
  // Initialize trustCounts and isTrustedBy arrays
  const trustCounts = new Array(n + 1).fill(0);
  const isTrustedBy = new Array(n + 1).fill(0);

  // Populate trustCounts and isTrustedBy arrays
  for (let [a, b] of trust) {
    trustCounts[a]++;
    isTrustedBy[b]++;
  }

  // Check for town judge
  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === 0 && isTrustedBy[i] === n - 1) {
      return i;
    }
  }

  // No town judge found
  return -1;
}

const n = 2;
const trust = [[1, 2]];

const judge = findJudge(n, trust);
console.log(judge); // output: 2
