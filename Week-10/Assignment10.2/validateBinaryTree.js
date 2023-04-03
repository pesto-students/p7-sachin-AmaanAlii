// Objective -
// Given the root of a binary tree, determine if it is a valid binary search tree (BST)

// Time Complexity - O(n)
// Space Complexity - O(n)

function isValidBST(root) {
  return checkBST(root, null, null);
}

function checkBST(node, min, max) {
  if (node === null) {
    return true;
  }
  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }
  return (
    checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max)
  );
}

const tree = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

console.log(isValidBST(tree)); // Output: true
