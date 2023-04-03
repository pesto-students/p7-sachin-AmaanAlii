// Objective -
// Find if Path Exists in Graph

// Time Complexity - O(V + E), where V is the number of vertices and E is the number of edges in the graph
// Space Complexity - O(V), which is used for the visited array

// Solution-

function validPath(n, edges, source, destination) {
  // create adjacency list
  const adjList = {};
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    if (!adjList[u]) adjList[u] = [];
    if (!adjList[v]) adjList[v] = [];
    adjList[u].push(v);
    adjList[v].push(u);
  }

  // initialize visited array
  const visited = new Array(n).fill(false);

  // perform DFS
  const dfs = (curr) => {
    if (curr === destination) return true;
    visited[curr] = true;
    if (adjList[curr]) {
      for (let i = 0; i < adjList[curr].length; i++) {
        const neighbor = adjList[curr][i];
        if (!visited[neighbor]) {
          if (dfs(neighbor)) return true;
        }
      }
    }
    return false;
  };

  return dfs(source);
}

// Example usage
const n = 3;
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
const source = 0;
const destination = 2;

console.log(validPath(n, edges, source, destination)); // true
