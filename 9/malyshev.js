const THRESHOLD = 5;

String.prototype.reverse = function () {
  if (this.length < 500_000) {
    let result = "";
    for (const i of this) {
      result = i + result;
    }
    return result;
  } else {
    return this.split("").reverse().join("");
  }
};

export const spinWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => (word && word.length >= THRESHOLD ? word.reverse() : word))
    .join(" ");
};
