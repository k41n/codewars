function roman(num) {
  // if (typeof num !== 'number' || !Number.isInteger(num) ||  num < 1 || num > 3999) {
  //      throw new Error("Invalid argument ")
  //  }

  const romanNumerals = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"],
  ];

  let romanNum = "";
  let digit = 0;

  while (num > 0) {
    romanNum = romanNumerals[digit][num % 10] + romanNum;
    digit++;
    num = Math.floor(num / 10);
  }

  return romanNum;
}

export { roman };
