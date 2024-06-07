function validBraces(s) {
  const stack = [];
  const braceMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (Object.values(braceMap).includes(char)) {
      stack.push(char);
    } else if (braceMap[char]) {
      if (stack.length > 0 && stack[stack.length - 1] === braceMap[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

export { validBraces };
