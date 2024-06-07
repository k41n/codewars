export const recoverSecret = (trigrams) => {
  let result = "";

  while (trigrams.length) {
    for (const [letter1] of trigrams) {
      const isHead = trigrams.every((trigram) => trigram.indexOf(letter1) <= 0);

      if (!isHead) continue;

      result += letter1;
      trigrams = trigrams
        .map((trigram) => (trigram[0] === letter1 ? trigram.slice(1) : trigram))
        .filter((trigram) => trigram.length);

      break;
    }
  }

  return result;
};
