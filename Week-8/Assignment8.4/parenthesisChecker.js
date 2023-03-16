// Objective - Given an expression string x.
//             Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]”
//             are correct in exp.

// Time Complexity: O(|x|)
// Space Complexity: O(|x|)

function areBracketsBalanced(x) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < x.length; i++) {
    const char = x[i];

    if (pairs[char]) {
      // if the current character is an opening bracket, push it onto the stack
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // if the current character is a closing bracket, check if it matches the top of the stack
      const top = stack.pop();
      if (!top || pairs[top] !== char) {
        return false;
      }
    }
  }

  // if the stack is empty, all brackets have been matched
  return stack.length === 0;
}

const input1 = "[()]{}{()()}";
const input2 = "[(])";

console.log(areBracketsBalanced(input1)); // true
console.log(areBracketsBalanced(input2)); // false
