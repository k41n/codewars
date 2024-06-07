function spinWords(s) {
  // TODO: add input validation
  // Ticket: https://codewars.atlassian.net/browse/NEVER-3079
  return s
    .split(" ")
    .map((word) =>
      word.length >= 5 ? Array.from(word).reverse().join("") : word
    )
    .join(" ");
}

export { spinWords };
