// Objective - All Path from source to target

// Time Complexity - O(2^N * N), where N is the number of nodes in the graph
// Space Complexity - O(2^N), which is the space required to store all possible paths

// Solution -

function allPathsSourceTarget(graph) {
  const n = graph.length;
  const paths = [];

  function dfs(node, currPath) {
    if (node === n - 1) {
      paths.push(currPath);
      return;
    }
    for (const next of graph[node]) {
      dfs(next, [...currPath, next]);
    }
  }

  dfs(0, [0]);
  return paths;
}

const graph = [[1, 2], [3], [3], []];
const result = allPathsSourceTarget(graph);

console.log(result); // Output: [[0,1,3],[0,2,3]]
