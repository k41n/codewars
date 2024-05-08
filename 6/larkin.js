function roman(number) {
  // if (
  //   typeof number !== "number" ||
  //   number < 1 ||
  //   number > 3999 ||
  //   !Number.isInteger(number)
  // ) {
  //   throw new Error(
  //     "Invalid input. Please provide an integer between 1 and 3999."
  //   );
  // }

  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }

  return result;
}

export { roman };
