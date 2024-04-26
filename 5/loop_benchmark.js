import { measure } from "../framework/utils.js";

const integers = new Array(10_000_000).fill(100);
measure("Loop by find", () => integers.find((x) => x === 101), 100);
measure(
  "Loop by arithmetical for ",
  () => {
    for (let i = 0; i < 10_000_000; i++) {
      if (101 === integers[i]) {
        return integers[i];
      }
    }
  },
  100
);
measure(
  "Loop by for ... of",
  () => {
    for (const integer of integers) {
      if (101 === integer) {
        return integer;
      }
    }
  },
  100
);
