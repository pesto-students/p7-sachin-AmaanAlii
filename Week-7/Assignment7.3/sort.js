// Question: Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Time Complexity: O(N)Expected Auxiliary Space: O(1)

// Sorting the array of 0's, 1's and 2's using the counting method
function sortArray(nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

// Counting the occurence of each 0,1 and 2
  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        count0++;
        break;
      case 1:
        count1++;
        break;
      case 2:
        count2++;
        break;
    }
  }

// Reconstructing the array with the number of occurences 
  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }
  for (let i = count0; i < count0 + count1; i++) {
    nums[i] = 1;
  }
  for (let i = count0 + count1; i < count0 + count1 + count2; i++) {
    nums[i] = 2;
  }

  console.log(nums);
}

sortArray([0, 2, 1, 2, 0]);
