// Objective - Given a linked list of N nodes. The task is to reverse this list
// Time Complexity - O(n)
// Space Complexity - O(1)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  head = prev;
  return head;
}

// Create the linked list
const node1 = new Node(2);
const node2 = new Node(7);
const node3 = new Node(8);
const node4 = new Node(9);
const node5 = new Node(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let head = node1;

// Reverse the linked list
head = reverseList(head);

// Print the reversed linked list
let result = "";
while (head !== null) {
  result += head.data + "->";
  head = head.next;
}
result += "null";

console.log(result);
