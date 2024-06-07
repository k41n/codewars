import { expectToEqual, measure, testSolution } from "../framework/utils.js";
import * as malyshev from "./malyshev.js";
import * as yakuncheva from "./yakuncheva.js";

const tests = (mod) => {
  expectToEqual(
    "whatisup",
    mod.recoverSecret([
      ["t", "u", "p"],
      ["w", "h", "i"],
      ["t", "s", "u"],
      ["a", "t", "s"],
      ["h", "a", "p"],
      ["t", "i", "s"],
      ["w", "h", "s"],
    ]),
    "whatisup"
  );
  expectToEqual(
    "abcd",
    mod.recoverSecret([
      ["a", "b", "c"],
      ["b", "c", "d"],
    ]),
    "abcd"
  );
  expectToEqual(
    "abcde",
    mod.recoverSecret([
      ["a", "b", "c"],
      ["c", "d", "e"],
    ]),
    "abcde"
  );
};

// Case 1 - repeat 100_000 times
const case1 = (mod) => {
  return measure(
    "100_000 times of whatisup",
    () => {
      for (let i = 0; i < 100_000; i++) {
        mod.recoverSecret([
          ["t", "u", "p"],
          ["w", "h", "i"],
          ["t", "s", "u"],
          ["a", "t", "s"],
          ["h", "a", "p"],
          ["t", "i", "s"],
          ["w", "h", "s"],
        ]);
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
  testSolution(solution, tests, [{ case: case1, label: "whatisup 100K" }], 1);
});
