function findOutlier(array) {
  if (!Array.isArray(array)) throw new Error("Argument must be an array");
  if (array.length < 3)
    throw new Error("The array must be greater than or equal to 3");

  let evenShortCheck = [];
  let oddShortCheck = [];
  let resultIsOdd = true;
  for (let i = 0; i < 3; i++) {
    if (isOdd(array[i])) oddShortCheck.push(array[i]);
    else evenShortCheck.push(array[i]);
  }

  if (evenShortCheck.length < oddShortCheck.length) resultIsOdd = false;

  for (let i = 0; i < array.length; i++) {
    if (isOdd(array[i])) {
      if (resultIsOdd) {
        return array[i];
      }
    } else if (!resultIsOdd) {
      return array[i];
    }
  }
  throw new Error("The array must contain one outlier");
}

function isOdd(value) {
  if (!Number.isInteger(value)) throw new Error("Value not an integer");
  return value & 1;
}

export { findOutlier };
