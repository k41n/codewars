export const measure = (label, fn, times = 5, divideBy = 1) => {
  const timeBefore = performance.now();

  for (let i = 0; i < times; i++) {
    fn();
  }

  const timeAfter = performance.now();

  let result = (timeAfter - timeBefore) / times / divideBy;
  let unit = "ms";

  if (result < 0.01) {
    result *= 1000;
    unit = "mcs";
  }

  if (result < 1) {
    result *= 1000;
    unit = "ns";
  }

  console.log(label, [result.toFixed(3), unit].join(" "));
};

export const testSolution = (mod, tests, cases) => {
  if (mod.module.prepare) {
    mod.module.prepare();
  }
  console.log(`Testing solution of ${mod.author}`);
  tests(mod.module);
  cases.forEach((useCase) => useCase(mod.module));
};

export const expectToEqual = (expected, actual, label) => {
  if (expected !== actual) {
    console.log(
      `${label ?? ""} FAILURE!!! [${actual}] is not equal to [${expected}]`
    );
  }
};
