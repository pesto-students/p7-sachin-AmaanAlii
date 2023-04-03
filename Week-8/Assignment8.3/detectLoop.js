// Objective - Given a linked list of N nodes. The task is to check if the linked list has a loop.
//             Linkedlist can contain self loop.
// Time Complexity - O(n)
// Space Complexity - O(1)

// Define a Node class to represent each node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class to represent the linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a new node to the end of the linked list
  addNode(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to check if the linked list has a loop
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  // Method to create a self-loop in the linked list
  createLoop(x) {
    if (x <= 0) {
      return;
    }
    let current = this.head;
    let lastNode = null;
    let count = 1;
    while (current.next) {
      if (count === x) {
        lastNode = current;
      }
      current = current.next;
      count++;
    }
    if (lastNode) {
      current.next = lastNode;
    }
  }
}

// Example usage
let list = new LinkedList();
list.addNode(1);
list.addNode(3);
list.addNode(4);

list.createLoop(2);

console.log(list.hasLoop()); // Output: true
