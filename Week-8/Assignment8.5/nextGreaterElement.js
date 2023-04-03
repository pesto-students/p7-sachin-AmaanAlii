// Objective -
// Given an array arr{} of size N having distinct elements,
// the task is to find the nextgreater element for each element of the
// array in order of their appearance in the array.

// Time Complexity : O(N)
// Space Complexity : O(N)

function nextGreaterElement(arr, n) {
  // Create a stack to store the indices of the elements whose next greater element is not yet found.
  const stack = [];
  // Create an array to store the next greater element of each element in the input array.
  const next = new Array(n);

  // Iterate through the input array from right to left.
  for (let i = n - 1; i >= 0; i--) {
    // Remove the indices of the elements from the stack whose next greater element is smaller than the current element.
    while (stack.length && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    // If there is no next greater element for the current element, store -1 in the next array.
    if (!stack.length) {
      next[i] = -1;
    }
    // Otherwise, store the next greater element of the current element in the next array.
    else {
      next[i] = arr[stack[stack.length - 1]];
    }

    // Push the index of the current element onto the stack.
    stack.push(i);
  }

  // Return the next array.
  return next;
}

// Example usage:
const arr = [1, 3, 2, 4];
const n = arr.length;
const result = nextGreaterElement(arr, n);
console.log(result); // [3, 4, 4, -1]
