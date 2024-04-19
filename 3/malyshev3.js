import { MORSE_CODE as _MORSE_CODE } from "./morse.js";

const MORSE_CODE = {
  ..._MORSE_CODE,
  " ": " ",
};

const addToNode = (letter, node, remainder) => {
  node.children ||= {};
  if (remainder.length === 1) {
    node.children[remainder] ||= {};
    node.children[remainder].code = MORSE_CODE[letter];
  } else {
    const newNode = node.children[remainder[0]] || {};
    node.children[remainder[0]] = newNode;
    addToNode(letter, newNode, remainder.slice(1));
  }
};

const preparePrefixTree = () => {
  prefixTree = {
    children: {},
  };

  for (const letter of Object.keys(MORSE_CODE)) {
    addToNode(letter, prefixTree, letter);
  }
};

let prefixTree;

export const prepare = () => {
  preparePrefixTree();
};

const SPACE = " ";

export const decodeMorse = (input) => {
  const result = [];
  let currentNode = prefixTree;
  for (const char of input.trim()) {
    if (currentNode.code && char === SPACE) {
      result.push(currentNode.code);
      currentNode = prefixTree;
    } else {
      currentNode = currentNode.children[char];
    }
  }

  if (currentNode.code) {
    result.push(currentNode.code);
  }

  return result.join("");
};
