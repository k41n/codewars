import _ from "lodash";
import { MORSE_CODE } from "./morse.js";

const LONG_SEPARATOR = "   ";
const SHORT_SEPARATOR = " ";
const EMPTY_SEPARATOR = "";

export const prepare = () => {};

function decodeMorse(input) {
  return _.trim(input)
    .split(LONG_SEPARATOR)
    .map((morseWord) =>
      morseWord
        .split(SHORT_SEPARATOR)
        .map((letter) => MORSE_CODE[letter])
        .join(EMPTY_SEPARATOR)
    )
    .join(SHORT_SEPARATOR);
}

export { decodeMorse };
