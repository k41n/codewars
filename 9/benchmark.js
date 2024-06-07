import { expectToEqual, measure, testSolution } from "../framework/utils.js";
import * as malyshev from "./malyshev.js";
import * as yakuncheva from "./yakuncheva.js";

const tests = (mod) => {
  expectToEqual("Test", mod.spinWords("Test"), "Test => Test");
  expectToEqual("gnitseT", mod.spinWords("Testing"), "Testing => gnitseT");
  expectToEqual("okoloM", mod.spinWords("Moloko"), "Moloko => okoloM");
  expectToEqual(
    "Hey wollef sroirraw",
    mod.spinWords("Hey fellow warriors"),
    "Hey fellow warriors => Hey wollef sroirraw"
  );
  expectToEqual(
    "This is a test",
    mod.spinWords("This is a test"),
    "This is a test => This is a test"
  );
  expectToEqual(
    "This is rehtona test",
    mod.spinWords("This is another test"),
    "This is another test => This is rehtona test"
  );
  expectToEqual(
    " This is rehtona test ",
    mod.spinWords(" This is another test "),
    " This is another test  =>  This is rehtona test "
  );
  expectToEqual("𝌆𝌆𝌆𝌆𝌆a", mod.spinWords("a𝌆𝌆𝌆𝌆𝌆"), "a𝌆𝌆𝌆𝌆𝌆 => 𝌆𝌆𝌆𝌆𝌆a");
};

// Case 1 - very big single word
const case1 = (mod) => {
  const input = "az".repeat(1_000_000);
  return measure(
    "Reverse 1M of az",
    () => {
      mod.spinWords(input);
    },
    10
  );
};

// Case 2 - 10M of spaces
const case2 = (mod) => {
  const input = " ".repeat(1_000_000);
  return measure(
    "Reverse 1M of spaces",
    () => {
      mod.spinWords(input);
    },
    10
  );
};

// Case 3 - 10M of 5-letter words
const case3 = (mod) => {
  const input = "tenet".repeat(1_000_000);
  return measure(
    "Reverse 1M of tenets",
    () => {
      mod.spinWords(input);
    },
    10
  );
};

// Case 4 - 10M of 3-letter words
const case4 = (mod) => {
  const input = "LOL".repeat(1_000_000);
  return measure(
    "Reverse 1M of LOL",
    () => {
      mod.spinWords(input);
    },
    10
  );
};

const case5 = (mod) => {
  const input = "TENET";
  return measure(
    "Reverse TENET 1M times",
    () => {
      for (let i = 0; i < 1_000_000; i++) {
        mod.spinWords(input);
      }
    },
    10
  );
};

const solutions = [
  {
    author: "Andrei Malyshev",
    module: malyshev,
  },
  {
    author: "Irina Yakuncheva",
    module: yakuncheva,
  },
];

solutions.forEach((solution) => {
  testSolution(
    solution,
    tests,
    [
      { case: case1, label: "Revert big one" },
      { case: case2, label: "Endless space" },
      { case: case3, label: "TENET" },
      { case: case4, label: "LOL" },
      { case: case5, label: "10M tenet" },
    ],
    1
  );
});
