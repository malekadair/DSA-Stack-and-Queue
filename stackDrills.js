const Stack = require("./stack");
const Queue = require("./queue");
const { peek, isEmpty, display, is_palindrome } = require("./stackFuncs");

const newStack = () => {
  const starTrek = new Stack();
  console.log(isEmpty(starTrek));

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  starTrek.pop();
  starTrek.pop();
  console.log(isEmpty(starTrek));
  console.log("peek", peek(starTrek));
  display(starTrek);
};

newStack();

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
