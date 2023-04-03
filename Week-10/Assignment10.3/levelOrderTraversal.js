// Objective -
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).

// Time Complexity - O(n)
// Space Complexity - O(n)

function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
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

console.log(levelOrder(root)); // Output: [[3],[9,20],[15,7]]
