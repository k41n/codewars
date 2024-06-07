const inputValidation = (input) => {
  if (typeof input !== "string")
    throw new Error("The argument is not a string");
};

const closedBracketByOpenBracket = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const validBraces = (str) => {
  // inputValidation(str);

  const expectedClosingBracketsStack = [];

  for (const currentSymbol of str) {
    switch (currentSymbol) {
      case "{":
      case "[":
      case "(":
        {
          expectedClosingBracketsStack.push(
            closedBracketByOpenBracket[currentSymbol]
          );
        }
        break;

      case "}":
      case "]":
      case ")":
        {
          const expectedBracketsClosure = expectedClosingBracketsStack.pop();

          if (expectedBracketsClosure !== currentSymbol) return false;
        }
        break;

      default:
        throw new Error(
          "The string contains symbols other than the symbols (){}[]"
        );
    }
  }

  return expectedClosingBracketsStack.length === 0;
};

export { validBraces };
