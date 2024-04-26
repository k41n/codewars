/**
 * Finds the outlier in an array of numbers based on whether most numbers are even or odd.
 * If strict mode is enabled, it also checks for array length and type validity.
 *
 * @param {number[]} array - The array of numbers to search for an outlier.
 * @param {Object} [options={}] - Optional parameters.
 * @param {boolean} [options.strict=false] - If set to true, strict mode is enabled.
 * @throws {Error} Throws an error if the array length is less than 3, if strict mode is enabled and the array contains invalid values,
 * or if strict mode is enabled and there are multiple outliers.
 * @returns {(number|null)} Returns the outlier if found, otherwise null.
 * @example
 * // Basic usage
 * const result = findOutlier([2, 4, 6, 7, 8]); // Returns 7 (an odd number in an array of even numbers)
 *
 * // Usage with strict mode enabled
 * const result = findOutlier([2, 4, 6, 7, 8], { strict: true }); // Returns 7
 *
 * // Invalid usage (strict mode)
 * findOutlier([2, 'invalid', 6, 7, 8], { strict: true }); // Throws an error: Invalid value in array
 */
function findOutlier(array, { strict = false } = {}) {
  if (!Array.isArray(array) || array.length < 3) {
    throw new Error("Invalid array. Minimum array length should be 3.");
  }

  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num % 2 !== 0;

  const evenCount = array.slice(0, 3).filter(isEven).length;

  const searchFunc = evenCount > 1 ? isOdd : isEven;

  const result = array.find(searchFunc);

  if (strict) {
    if (array.some((num) => typeof num !== "number"))
      throw new Error(`Invalid value in array`);
    const outliers = array.filter(searchFunc);
    if (outliers.length > 1)
      throw new Error(
        `Invalid array, several outliers found: ${outliers.join(", ")}`
      );
    if (!result) throw new Error("Outlier not found");
  }

  return result ?? null;
}

export { findOutlier };
