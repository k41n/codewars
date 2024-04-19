import { MORSE_CODE as _MORSE_CODE } from "./morse.js";

const MORSE_CODE = new Map(Object.entries(_MORSE_CODE));

export const prepare = () => {};

export const decodeMorse = (input) => {
  const words = input.trim().split("   ");
  return words
    .map((word) =>
      word
        .split(" ")
        .map((letter) => MORSE_CODE.get(letter))
        .join("")
    )
    .join(" ");
};
