const ONLY_BRACES_REGEXP = /^[(){}\[\]]*$/;

const validInput = (input) => {
  if (typeof input !== "string")
    throw new TypeError(`Expected "string", but received ${typeof input}`);
  if (!ONLY_BRACES_REGEXP.test(input))
    throw new Error('Only "(){}[]" braces allowed');
};

const BRACE_PAIRS = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

const validBraces = (input) => {
  // validInput(input);

  const stack = [];

  for (const brace of input) {
    if (BRACE_PAIRS.has(brace)) {
      stack.push(BRACE_PAIRS.get(brace));
    } else {
      if (!stack.length || stack.pop() !== brace) {
        return false;
      }
    }
  }

  return !stack.length;
};

export { validBraces };
