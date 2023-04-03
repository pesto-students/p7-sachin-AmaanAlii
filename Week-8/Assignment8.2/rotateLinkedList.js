// Objective - Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
//             where k is a given positive integer smaller than or equal to length of the linked list.
// Time Complexity - O(n)
// Space Complexity - O(1)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function leftShiftLinkedList(head, k) {
  if (!head || k === 0) {
    return head;
  }

  let curr = head;
  let len = 1;

  while (len < k && curr) {
    curr = curr.next;
    len++;
  }

  if (!curr) {
    return head;
  }

  const kthNode = curr;

  while (curr.next) {
    curr = curr.next;
  }

  curr.next = head;
  head = kthNode.next;
  kthNode.next = null;

  return head;
}

function printLinkedList(head) {
  let curr = head;
  let result = "";

  while (curr) {
    result += curr.data + " ";
    curr = curr.next;
  }

  console.log(result.trim());
}

// Example usage:

const N = 5;
const values = [2, 4, 7, 8, 9];
const k = 3;
let head = null;

for (let i = N - 1; i >= 0; i--) {
  const newNode = new Node(values[i]);
  newNode.next = head;
  head = newNode;
}

console.log("Before shifting: ");
printLinkedList(head);

head = leftShiftLinkedList(head, k);

console.log("After shifting: ");
printLinkedList(head);
