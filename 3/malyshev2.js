import { MORSE_CODE } from "./morse.js";

export const prepare = () => {};

export const decodeMorse = (input) => {
  let currentLetter = "";
  let currentWord = "";
  let spaceCounter = 0;
  let result = "";
  let resultBlank = true;
  let currentLetterBlank = true;

  for (const char of input) {
    if (char === " ") {
      if (!currentLetterBlank) {
        currentWord += MORSE_CODE[currentLetter];
      }
      currentLetter = "";
      currentLetterBlank = true;
      spaceCounter++;
    } else {
      currentLetter += char;
      spaceCounter = 0;
      currentLetterBlank = false;
    }
    if (spaceCounter === 3) {
      if (currentWord.length > 0) {
        if (resultBlank) {
          resultBlank = false;
        } else {
          result += " ";
        }
        result += currentWord;
      }
      currentWord = "";
      currentLetter = "";
      currentLetterBlank = true;
      spaceCounter = 0;
    }
  }

  if (!currentLetterBlank) {
    currentWord += MORSE_CODE[currentLetter];
  }
  if (currentWord.length > 0) {
    if (!resultBlank) {
      result += " ";
    }
    result += currentWord;
  }
  return result;
};
