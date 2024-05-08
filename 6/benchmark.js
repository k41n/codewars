import { expectToEqual, measure, testSolution } from "../framework/utils.js";
import * as malyshev from "./malyshev.js";
import * as malyshev2 from "./malyshev2.js";
import * as kazantsev from "./kazantsev.js";
import * as larkin from "./larkin.js";
import * as yakuncheva from "./yakuncheva.js";
import * as kazantsev2 from "./kazantsev2.js";
import * as zakharov from "./zakharov.js";
import * as kazantsev3 from "./kazantsev3.js";

const tests = (mod) => {
  expectToEqual("I", mod.roman(1), "1 = I");
  expectToEqual("II", mod.roman(2), "2 = II");
  expectToEqual("III", mod.roman(3), "3 = III");
  expectToEqual("IV", mod.roman(4), "4 = IV");
  expectToEqual("V", mod.roman(5), "5 = V");
  expectToEqual("VI", mod.roman(6), "6 = VI");
  expectToEqual("VII", mod.roman(7), "7 = VII");
  expectToEqual("VIII", mod.roman(8), "8 = VIII");
  expectToEqual("IX", mod.roman(9), "9 = IX");
  expectToEqual("X", mod.roman(10), "10 = X");
  expectToEqual("XI", mod.roman(11), "11 = XI");
  expectToEqual("XII", mod.roman(12), "12 = XII");
  expectToEqual("XIII", mod.roman(13), "13 = XIII");
  expectToEqual("XIV", mod.roman(14), "14 = XIV");
  expectToEqual("XV", mod.roman(15), "15 = XV");
  expectToEqual("XVI", mod.roman(16), "16 = XVI");
  expectToEqual("XVII", mod.roman(17), "17 = XVII");
  expectToEqual("XVIII", mod.roman(18), "18 = XVIII");
  expectToEqual("XIX", mod.roman(19), "19 = XIX");
  expectToEqual("XX", mod.roman(20), "20 = XX");
  expectToEqual("XXI", mod.roman(21), "21 = XXI");
  expectToEqual("XXXII", mod.roman(32), "32 = XXXII");
  expectToEqual("XLIV", mod.roman(44), "44 = XLIV");
  expectToEqual("LV", mod.roman(55), "55 = LV");
  expectToEqual("LXVI", mod.roman(66), "66 = LXVI");
  expectToEqual("XCIX", mod.roman(99), "99 = XCIX");
  expectToEqual("C", mod.roman(100), "100 = C");
  expectToEqual("CI", mod.roman(101), "101 = CI");
  expectToEqual("CCII", mod.roman(202), "202 = CCII");
  expectToEqual("CCCXLIV", mod.roman(344), "344 = CCXLIV");
  expectToEqual("CDXLIV", mod.roman(444), "444 = CDXLIV");
  expectToEqual("D", mod.roman(500), "500 = D");
  expectToEqual("DCXLIX", mod.roman(649), "649 = DCXLIX");
  expectToEqual("CM", mod.roman(900), "900 = CM");
  expectToEqual("MMMCMXCIX", mod.roman(3999), "3999 = MMMCMXCIX");
};

const case1 = (mod) => {
  return measure(
    "Find the roman interpretation of 10_000_000 of 3999",
    () => {
      for (let i = 0; i < 10_000_000; i++) {
        if ("MMMCMXCIX" !== mod.roman(3999)) {
          throw new Error("CASE I failed");
        }
      }
    },
    10,
    10_000_000
  );
};

const case2 = (mod) => {
  return measure(
    "Find the roman interpretation of 10_000_000 of 1",
    () => {
      for (let i = 0; i < 10_000_000; i++) {
        if ("I" !== mod.roman(1)) {
          throw new Error("CASE II failed");
        }
      }
    },
    10,
    10_000_000
  );
};
const solutions = [
  {
    author: "Andrei Malyshev",
    module: malyshev,
  },
  {
    author: "Andrei Malyshev (smartass cheat)",
    module: malyshev2,
  },
  {
    author: "Vlad Kazantsev",
    module: kazantsev,
  },
  {
    author: "Vyacheslav Larkin",
    module: larkin,
  },
  {
    author: "Irina Yakuncheva",
    module: yakuncheva,
  },
  {
    author: "Vlad Kazantsev 2",
    module: kazantsev2,
  },
  {
    author: "Mikhail Zakharov",
    module: zakharov,
  },
  {
    author: "Vlad Kazantsev 3",
    module: kazantsev3,
  },
];

solutions.forEach((solution) => {
  testSolution(solution, tests, [
    { case: case1, label: "Worst case" },
    { case: case2, label: "Best case" },
  ]);
});
