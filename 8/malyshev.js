const CLOSER = new Map(
  Object.entries({
    "(": ")",
    "[": "]",
    "{": "}",
  })
);

export const validBraces = (braces) => {
  const stack = [];
  const length = braces.length;

  for (let i = 0; i < length; i++) {
    const char = braces[i];
    switch (char) {
      case "(":
      case "[":
      case "{":
        stack.push(char);
        break;
      case ")":
      case "]":
      case "}":
        if (CLOSER.get(stack.pop()) !== char) {
          return false;
        }
        break;
    }
  }

  return stack.length === 0;
};
