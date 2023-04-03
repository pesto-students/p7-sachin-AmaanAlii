// Given the root of a binary tree, return its maximum depth
// Time Complexity - O(n)
// Space Complexity - O(h), where h is the height of the binary tree

function maxDepth(root) {
  if (!root) {
    // base case: reached the end of the tree
    return 0;
  } else {
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth); // add 1 to the deeper subtree's depth
  }
}

const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(maxDepth(root)); // output: 3
