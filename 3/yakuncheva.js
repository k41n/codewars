import { MORSE_CODE } from "./morse.js";
function addWordDecoding(vocabularyRoot, word, decoding) {
  let currentVertex = vocabularyRoot;
  for (const letter of word) {
    if (!currentVertex.neighbours[letter])
      currentVertex.neighbours[letter] = { neighbours: {} };
    currentVertex = currentVertex.neighbours[letter];
  }
  currentVertex.word = decoding;
}
function buildVocabularyTrie(vocabulary) {
  const root = { neighbours: {} };
  for (const [word, decoding] of Object.entries(vocabulary)) {
    addWordDecoding(root, word, decoding);
  }
  return root;
}
function decodeMessageByVocabulary(message, delemiter) {
  const vocabularyRoot = vocabulary;
  let currentVertex = vocabularyRoot;
  const words = [];
  for (const letter of message) {
    if (currentVertex.word && letter === delemiter) {
      words.push(currentVertex.word);
      currentVertex = vocabularyRoot;
    } else currentVertex = currentVertex.neighbours[letter];
    if (!currentVertex) {
      throw new Error(`Unknown word`);
    }
  }
  if (!currentVertex.word) throw new Error(`Unknown word`);
  words.push(currentVertex.word);
  return words.join("");
}

let vocabulary = {};

export const prepare = () => {
  vocabulary = buildVocabularyTrie(
    Object.assign(Object.assign({}, MORSE_CODE), { " ": " " })
  );
};

function decodeMorse(message) {
  return decodeMessageByVocabulary(message.trim(), " ");
}

export { decodeMorse };
