const ONES = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const TENS = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const HUNDREDS = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const THOUSANDS = ["", "M", "MM", "MMM"];

function applyDigit(alphabet, num) {
  const units = Math.floor(this.rem / num);
  this.result += alphabet[units];
  this.rem -= num * units;
  return this;
}

export const roman = (num) => {
  const state = {
    applyDigit,
    rem: num,
    result: "",
  };

  state
    .applyDigit(THOUSANDS, 1000)
    .applyDigit(HUNDREDS, 100)
    .applyDigit(TENS, 10)
    .applyDigit(ONES, 1);

  return state.result;
};
