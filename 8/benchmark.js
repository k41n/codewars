import { expectToEqual, measure, testSolution } from "../framework/utils.js";
import * as malyshev from "./malyshev.js";
import * as kadantsev from "./kadantsev.js";
import * as potapkin from "./potapkin.js";
import * as larkin from "./larkin.js";

const tests = (mod) => {
  expectToEqual(false, mod.validBraces("())"), "()) - wrong");
  expectToEqual(false, mod.validBraces("(()"), "(() - wrong");
  expectToEqual(true, mod.validBraces(""), "empty - correct");
  expectToEqual(true, mod.validBraces("()"), "() - correct");
  expectToEqual(true, mod.validBraces("[]"), "[] - correct");
  expectToEqual(true, mod.validBraces("{}"), "{} - correct");
  expectToEqual(true, mod.validBraces("{}()"), "{}() - correct");
  expectToEqual(true, mod.validBraces("{[()]}"), "{[()]} - correct");
  expectToEqual(false, mod.validBraces("{[()}]"), "{[()}] - wrong");
};

const case1 = (mod) => {
  const input = "(".repeat(10_000_000) + ")".repeat(10_000_000);
  return measure(
    "Validate line of 20_000_000 balanced brackets",
    () => {
      if (!mod.validBraces(input)) {
        throw new Error("CASE 1 failed");
      }
    },
    10
  );
};

const case2 = (mod) => {
  const input = "}" + ")".repeat(20_000_000);
  return measure(
    "Early return booby trap",
    () => {
      if (mod.validBraces(input)) {
        throw new Error("CASE 2 failed");
      }
    },
    100
  );
};

const case3 = (mod) => {
  const input = "(".repeat(10_000_000) + "}";
  return measure(
    "Validate line of 10_000_001 imbalanced brackets",
    () => {
      if (mod.validBraces(input)) {
        throw new Error("CASE 3 failed");
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
    author: "Alexey Kadantsev",
    module: kadantsev,
  },
  {
    author: "Kirill Potapkin",
    module: potapkin,
  },
  {
    author: "Vyacheslav Larkin",
    module: larkin,
  },
];

solutions.forEach((solution) => {
  testSolution(
    solution,
    tests,
    [
      { case: case1, label: "Worst case" },
      { case: case2, label: "Early return" },
      { case: case3, label: "Imbalanced lately" },
    ],
    1
  );
});
