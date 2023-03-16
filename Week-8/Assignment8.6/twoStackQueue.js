// Objective -
// Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types
// (i) 1 x (a queryof this type means pushing 'x' into the queue)
// (ii) 2 (a query of this type means to popelement from queue and print the poped element)

// Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()
// Expected Auxilliary Space : O(1)

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push(x); // push element to stack1
  }

  pop() {
    if (this.stack2.length === 0) {
      // if stack2 is empty, transfer elements from stack1
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      // if still empty, return -1 (queue is empty)
      return -1;
    }

    return this.stack2.pop(); // return the popped element from stack2
  }
}

// Example usage:
const q = new Queue();
const n = 5;
const queries = [[1, 2], [1, 3], [2], [1, 4], [2]];

for (let i = 0; i < n; i++) {
  const [queryType, x] = queries[i];
  if (queryType === 1) {
    q.push(x);
  } else {
    console.log(q.pop());
  }
}
