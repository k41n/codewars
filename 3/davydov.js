import { MORSE_CODE } from "./morse.js";
const FALLBACK_CHAR = "";

function stringsIsEqual(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1.charAt(i).toUpperCase();
    const char2 = str2.charAt(i).toUpperCase();

    if (char1 !== char2) return false;
  }

  return true;
}

function createRandomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!$&()+,-./! ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function makeMorseDictionaryMap() {
  return new Map(
    Object.keys(MORSE_CODE).map((key) => [key, MORSE_CODE[key].toUpperCase()])
  );
}

function makeAlphabetToMorseDictionaryMap() {
  return new Map(
    Object.keys(MORSE_CODE).map((key) => [MORSE_CODE[key].toUpperCase(), key])
  );
}

function stringToMorse(str) {
  const alphabet = makeAlphabetToMorseDictionaryMap();

  let codedStr = "";
  for (const char of str) {
    const upperCasedChar = char.toUpperCase();
    const codedChar =
      char === " " ? " " : alphabet.get(upperCasedChar) + " " ?? FALLBACK_CHAR;
    codedStr += codedChar;
  }
  return codedStr;
}

let dictionary;

export const prepare = () => {
  dictionary = makeMorseDictionaryMap();
};

function decodeMorse(str) {
  if (!str) return str;

  let decodedStr = "";
  let currentMorseChar = "";
  for (const char of str) {
    if (char !== " ") {
      currentMorseChar += char;
      continue;
    }

    let decodedChar = " ";
    if (currentMorseChar) {
      decodedChar = dictionary.get(currentMorseChar) ?? FALLBACK_CHAR;
      currentMorseChar = "";
    }

    decodedStr += decodedChar;
  }

  return decodedStr;
}

export { decodeMorse };
