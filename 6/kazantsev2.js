const ROMAN_NUMBERS_ENTRIES = Object.freeze([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

function validateInput(source) {
  if (typeof source !== "number") throw new Error("Source must be a number");
  if (!Number.isInteger(source)) {
    throw new Error("Source number must be an integer");
  }
  if (source <= 0 || source >= 4000)
    throw new Error("Source number must be in interval (0 < x < 4000)");
}

function roman(source) {
  // validateInput(source);
  let result = "";

  for (const [arabicNumber, romanNumber] of ROMAN_NUMBERS_ENTRIES) {
    if (source < arabicNumber) continue;

    const intOfDivision = Math.floor(source / arabicNumber);
    for (let i = 0; i < intOfDivision; i++) {
      result += romanNumber;
      source -= arabicNumber;
    }
  }

  return result;
}

export { roman };
