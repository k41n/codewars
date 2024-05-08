const ROMAN_DIGITS_BY_PLACE = [
  { one: "I", five: "V" },
  { one: "X", five: "L" },
  { one: "C", five: "D" },
  { one: "M" },
];

function getRomanDigitSymbolsForPlace(place) {
  const { one, five = "" } = ROMAN_DIGITS_BY_PLACE[place];
  const ten = ROMAN_DIGITS_BY_PLACE[place + 1]?.one ?? "";
  return { one, five, ten };
}

function digitToRoman(digit, place) {
  const { one, five, ten } = getRomanDigitSymbolsForPlace(place);
  if (digit === 9) return one + ten;
  if (digit === 4) return one + five;
  const [fivesCount, onesCount] = digit >= 5 ? [1, digit - 5] : [0, digit];
  return five.repeat(fivesCount) + one.repeat(onesCount);
}

function roman(n) {
  // if (!Number.isInteger(n) || n < 1 || n > 3999)
  //   throw new Error(`Only integers from range [1, 3999] are supported`);

  const reversedDigits = n.toString().split("").reverse().map(Number);
  return reversedDigits.map(digitToRoman).reverse().join("");
}

export { roman };
