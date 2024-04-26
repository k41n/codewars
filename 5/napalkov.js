function findOutlier(array) {
  if (!Array.isArray(array)) throw new Error("Argument must be an array");
  if (array.length < 3)
    throw new Error("The length of array must be greater than 3");

  let oddNumbersCount = 0;
  let evenNumbersCount = 0;
  let firstOddNumber = null;
  let firstEvenNumber = null;

  for (const item of array) {
    if (isEven(item)) {
      if (oddNumbersCount > 1) return item;
      if (evenNumbersCount >= 1 && oddNumbersCount === 1) return firstOddNumber;
      evenNumbersCount = evenNumbersCount + 1;
      if (firstEvenNumber === null) firstEvenNumber = item;
      continue;
    } else {
      if (evenNumbersCount > 1) return item;
      if (oddNumbersCount >= 1 && evenNumbersCount === 1)
        return firstEvenNumber;
      oddNumbersCount = oddNumbersCount + 1;
      if (firstOddNumber === null) firstOddNumber = item;
      continue;
    }
  }

  throw new Error("Could not find an outlier");
}

function isEven(number) {
  if (typeof number !== "number") throw new Error("Argument must be a number");
  return number % 2 === 0;
}

export { findOutlier };
