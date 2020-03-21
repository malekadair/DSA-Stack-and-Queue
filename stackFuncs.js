const Stack = require("./stack");

const peek = stack => {
  if (!stack.top) return null;
  return stack.top.data;
};

const isEmpty = stack => {
  return stack.top == null;
};

const display = stack => {
  let node = stack.top;
  //if stack is empty
  if (node == null) {
    console.log("stack is empty");
  }
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
};
const is_palindrome = s => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let stringStack = new Stack();

  firstHalfIndex = Math.floor((s.length - 2) / 2);
  secondHalfIndex = Math.ceil(s.length / 2);

  for (let i = 0; i <= firstHalfIndex; i++) {
    stringStack.push(s[i]);
  }
  for (let i = secondHalfIndex; i < s.length; i++) {
    let poppedNode = stringStack.pop();
    if (poppedNode != s[i]) {
      return false;
    }
    return true;
  }
};

module.exports = { peek, isEmpty, display, is_palindrome };
