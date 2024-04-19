import { MORSE_CODE } from "./morse.js";

type Vertex = {
  word?: string,
  neighbours: Record<string, Vertex>,
};

function addWordDecoding(
  vocabularyRoot: Vertex,
  word: string,
  decoding: string
): void {
  let currentVertex = vocabularyRoot;
  for (const letter of word) {
    if (!currentVertex.neighbours[letter])
      currentVertex.neighbours[letter] = { neighbours: {} };
    currentVertex = currentVertex.neighbours[letter];
  }
  currentVertex.word = decoding;
}

function buildVocabularyTrie(vocabulary: Record<string, string>): Vertex {
  const root: Vertex = { neighbours: {} };
  for (const [word, decoding] of Object.entries(vocabulary)) {
    addWordDecoding(root, word, decoding);
  }
  return root;
}

function decodeMessageByVocabulary(
  message: string,
  vocabulary: Record<string, string>,
  delemiter: string
): string {
  const vocabularyRoot = buildVocabularyTrie(vocabulary); // btw, can be save to const near MORSE_CODE
  let currentVertex = vocabularyRoot;
  const words: string[] = [];
  for (const letter of message) {
    if (currentVertex.word && letter === delemiter) {
      words.push(currentVertex.word);
      currentVertex = vocabularyRoot;
    } else currentVertex = currentVertex.neighbours[letter];
    if (!currentVertex) throw new Error(`Unknown word`);
  }
  if (!currentVertex.word) throw new Error(`Unknown word`);
  words.push(currentVertex.word);
  return words.join("");
}

function decodeMorse(message: string): string {
  return decodeMessageByVocabulary(
    message.trim(),
    { ...MORSE_CODE, " ": " " },
    " "
  );
}
