const ROMAN_NUMBERS_MAP = new Map([
  [3000, "MMM"],
  [2000, "MM"],
  [1000, "M"],
  [900, "CM"],
  [800, "DCCC"],
  [700, "DCC"],
  [600, "DC"],
  [500, "D"],
  [400, "CD"],
  [300, "CCC"],
  [200, "CC"],
  [100, "C"],
  [90, "XC"],
  [80, "LXXX"],
  [70, "LXX"],
  [60, "LX"],
  [50, "L"],
  [40, "XL"],
  [30, "XXX"],
  [20, "XX"],
  [10, "X"],
  [9, "IX"],
  [8, "VIII"],
  [7, "VII"],
  [6, "VI"],
  [5, "V"],
  [4, "IV"],
  [3, "III"],
  [2, "II"],
  [1, "I"],
]);

const TEN_POWERS = new Map([
  [0, 1],
  [1, 10],
  [2, 100],
  [3, 1000],
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
  const sourceString = String(source);
  const sourceStringLength = sourceString.length;

  for (let i = 0; i < sourceStringLength; i++) {
    const digit = Number(sourceString[i]);
    if (digit === 0) continue;

    const order = digit * TEN_POWERS.get(sourceStringLength - i - 1);
    result += ROMAN_NUMBERS_MAP.get(order);
  }

  return result;
}

export { roman };
