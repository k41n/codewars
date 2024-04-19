import { MORSE_CODE } from "./morse.js";
import _ from "lodash";

export const prepare = () => {};

const formatCode = (code) => `(${_.escapeRegExp(code)}\\s{1,2})`;

const morseRegExp = new RegExp(
  Object.keys(MORSE_CODE).map(formatCode).join("|"),
  "g"
);

function decodeMorse(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("Input argument should be a string");
  }
  return `${sentence} `.replace(morseRegExp, (char) => MORSE_CODE[char.trim()]);
}

export { decodeMorse };
