import { expectToEqual, measure, testSolution } from "../framework/utils.js";
import * as bulanov from "./bulanov.js";
import * as malyshev from "./malyshev.js";
import * as napalkov from "./napalkov.js";
import * as trofimova from "./trofimova.js";
import * as yakuncheva from "./yakuncheva.js";

const tests = (mod) => {
  expectToEqual(
    11,
    mod.findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]),
    "The only odd number"
  );
  expectToEqual(
    160,
    mod.findOutlier([160, 3, 1719, 19, 11, 13, -21]),
    "The only even number"
  );
  expectToEqual(250, mod.findOutlier([7, 250, 1719, 19, 11, 13, -21, 47]));
  expectToEqual(2580, mod.findOutlier([5, 3, 1719, 19, 11, 13, -21, 2580]));
};

const case1 = (mod) => {
  const integers = new Array(10_000_000).fill(100);
  integers.push(101);
  measure(
    "Find the 101 after 10M of 100s        ",
    () => {
      for (let i = 0; i < 10; i++) {
        if (101 !== mod.findOutlier(integers)) {
          throw new Error("CASE 1 failed");
        }
      }
    },
    100,
    10
  );
};

const case2 = (mod) => {
  const integers = new Array(10_000_000).fill(100);
  integers[0] = 101;
  measure(
    "Find the 101 preceding 10M of 100s    ",
    () => {
      for (let i = 0; i < 5_000_000; i++) {
        if (101 !== mod.findOutlier(integers)) {
          throw new Error("CASE 1 failed");
        }
      }
    },
    100,
    5_000_000
  );
};

const solutions = [
  {
    author: "Andrei Malyshev",
    module: malyshev,
  },
  {
    author: "Vadim Napalkov",
    module: napalkov,
  },
  {
    author: "Anastasiya Trofimova",
    module: trofimova,
  },
  {
    author: "Irina Yakuncheva",
    module: yakuncheva,
  },
  {
    author: "Vladislav Bulanov",
    module: bulanov,
  },
];

solutions.forEach((solution) => {
  testSolution(solution, tests, [case1, case2]);
});
