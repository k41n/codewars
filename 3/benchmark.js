import * as malyshev1 from "./malyshev1.js";
import * as malyshev2 from "./malyshev2.js";
import * as malyshev3 from "./malyshev3.js";
import * as shmakov from "./shmakov.js";
import * as kazantsev from "./kazantsev.js";
import * as davydov from "./davydov.js";
import * as yakuncheva from "./yakuncheva.js";
import { MORSE_CODE as _MORSE_CODE } from "./morse.js";
import { readFileSync } from "fs";

const MORSE_CODE = {
  ..._MORSE_CODE,
  " ": " ",
};

const inversedMorseCode = Object.fromEntries(
  Object.entries(MORSE_CODE).map(([key, value]) => [value, key])
);

const measure = (label, fn, times = 5) => {
  const timeBefore = performance.now();

  for (let i = 0; i < times; i++) {
    fn();
  }

  const timeAfter = performance.now();

  console.log(label, (timeAfter - timeBefore) / 5);
};

const encode = (text) =>
  text
    .toUpperCase()
    .split("")
    .map((letter) => inversedMorseCode[letter])
    .filter(Boolean)
    .join(" ");

const expectToEqual = (expected, actual, label) => {
  if (expected !== actual) {
    console.log(`FAILURE!!! [${actual}] is not equal to [${expected}]`);
  }
};

const tests = (mod) => {
  expectToEqual(mod.decodeMorse("...---..."), "SOS");
  expectToEqual(mod.decodeMorse(encode("hello kitty")), "HELLO KITTY");
  expectToEqual(
    mod.decodeMorse(" " + encode("hello kitty") + " "),
    "HELLO KITTY"
  );
  expectToEqual(
    mod.decodeMorse("  " + encode("hello kitty") + "  "),
    "HELLO KITTY"
  );
  expectToEqual(
    mod.decodeMorse("   " + encode("hello kitty") + "   "),
    "HELLO KITTY"
  );
  expectToEqual(
    mod.decodeMorse("    " + encode("hello kitty") + "    "),
    "HELLO KITTY"
  );
  expectToEqual(
    mod.decodeMorse(encode("The quick brown fox Jumps Over The Lazy Dog!")),
    "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG!"
  );

  expectToEqual(
    mod.decodeMorse("...---...   ...---...   ...---..."),
    "SOS SOS SOS"
  );
  console.log("Testing done");
};

const case1 = (mod) => {
  const inputString = "...---...   ".repeat(10_000_000);
  measure("Decode 10M of SOS", () => mod.decodeMorse(inputString));
};

const case2 = (mod) => {
  const originalString = readFileSync("book1", "ascii");
  const inputString = new Array(10).fill(encode(originalString)).join("   ");
  measure("10 x Thomas Hardy: Far from the Madding Crowd", () =>
    mod.decodeMorse(inputString)
  );
};

const testSolution = (mod) => {
  mod.module.prepare();
  console.log(`Testing solution of ${mod.author}`);
  tests(mod.module);
  case1(mod.module);
  case2(mod.module);
};

const solutions = [
  {
    author: "Andrei Malyshev (Naive)",
    module: malyshev1,
  },
  {
    author: "Andrei Malyshev (FSM)",
    module: malyshev2,
  },
  {
    author: "Andrei Malyshev (FSM + Prefix tree)",
    module: malyshev3,
  },
  {
    author: "Sergey Shmakov",
    module: shmakov,
  },
  {
    author: "Vladislav Kazantsev",
    module: kazantsev,
  },
  {
    author: "Irina Yakuncheva",
    module: yakuncheva,
  },
  {
    author: "Denis Davydov",
    module: davydov,
  },
];

solutions.forEach((solution) => {
  testSolution(solution);
});
