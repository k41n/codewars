import { expectToEqual, measure, testSolution } from "../framework/utils.js";
import * as malyshev from "./malyshev.js";
import * as marshev from "./marshev.js";
import * as kadantsev from "./kadantsev.js";
import * as skvortsov from "./skvortsov.js";

const tests = (mod) => {
  expectToEqual(1, mod.partyPeople([4, 1, 4, 5]), "[4,1,4,5] should return 1");
  expectToEqual(4, mod.partyPeople([0, 0, 0, 0]), "[0,0,0,0] should return 4");
  expectToEqual(0, mod.partyPeople([2, 3, 4, 5]), "[2,3,4,5] should return 0");
  expectToEqual(
    0,
    mod.partyPeople([10, 12, 15, 15, 5]),
    "[10,12,15,15,5] should return 0"
  );
  expectToEqual(4, mod.partyPeople([2, 1, 2, 0]), "[2,1,2,0] should return 4");
};

const case1 = (mod) => {
  const input = Array.from({ length: 10_000_000 }, (_, k) => k + 2);
  return measure(
    "Calculate the party for the 10_000_000 of monotonically incrementing numbers",
    () => {
      if (0 !== mod.partyPeople(input)) {
        throw new Error("CASE 1 failed");
      }
    },
    10
  );
};

const case2 = (mod) => {
  const input = Array.from({ length: 10_000_000 }).fill(1);
  return measure(
    "Calculate the party for the 10_000_000 of ones",
    () => {
      if (10_000_000 !== mod.partyPeople(input)) {
        throw new Error("CASE 2 failed");
      }
    },
    10
  );
};

const case3 = (mod) => {
  const input = Array.from({ length: 10_000_000 }).fill(10_000_001);
  return measure(
    "Calculate the party for the 10_000_000 of 10_000_001s",
    () => {
      if (0 !== mod.partyPeople(input)) {
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
    author: "Artem Marshev",
    module: marshev,
  },
  {
    author: "Alexey Kadantsev",
    module: kadantsev,
  },
  {
    author: "Maksim Skvortsov",
    module: skvortsov,
  },
];

solutions.forEach((solution) => {
  testSolution(
    solution,
    tests,
    [
      { case: case1, label: "Worst case" },
      { case: case2, label: "Best case" },
      { case: case3, label: "Even worse case" },
    ],
    1
  );
});
