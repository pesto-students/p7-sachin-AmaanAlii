function createstack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
      console.log("HERE", items);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createstack();
stack.push(10);
stack.push(5);
const result = stack.pop();
console.log(result);
console.log(stack.item); //undefined
stack.items = [20, 30, 40]; // does not work beacause we cannot access the items array from here.
stack.push(50);
