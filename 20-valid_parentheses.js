/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/  

function isValid(s) {
  let stackOfOpenBrackets = [];
  let mapping = { ')' : '(' , '}' : '{' , ']' : '[' };
  let closedBrackets = Object.keys(mapping);

  for (let i = 0; i < s.length; i++) {
    if (closedBrackets.includes(s[i])) {
      if (stackOfOpenBrackets.pop() != mapping[s[i]]) {
        return false;
      }
    } else {
      stackOfOpenBrackets.push(s[i])
    }
  }

  return !stackOfOpenBrackets.length;
}

function isValid(s) {
  let stackOfOpenBrackets = [];
  let mapping = { ')' : '(' , '}' : '{' , ']' : '[' };
  let openBrackets = Object.values(mapping);
  let closedBrackets = Object.keys(mapping);

  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stackOfOpenBrackets.push(s[i]);
    } else if (closedBrackets.includes(s[i])) {
      let topElement = stackOfOpenBrackets.pop();
      if (topElement != mapping[s[i]]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return !stackOfOpenBrackets.length;
}
