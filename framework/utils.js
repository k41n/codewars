export const measure = (label, fn, times = 5, divideBy = 1) => {
  const timeBefore = performance.now();

  for (let i = 0; i < times; i++) {
    fn();
  }

  const timeAfter = performance.now();

  return (timeAfter - timeBefore) / times / divideBy;
};

export const testSolution = (mod, tests, cases, mult = 1_000_000) => {
  if (mod.module.prepare) {
    mod.module.prepare();
  }
  tests(mod.module);
  // Warmup
  cases.map((useCase) => (useCase.case(mod.module) * mult).toFixed(2));
  // Real run
  const caseResults = cases.map((useCase) =>
    (useCase.case(mod.module) * mult).toFixed(2)
  );
  console.log([mod.author].concat(caseResults).join(";").replace(/\./g, ","));
};

export const expectToEqual = (expected, actual, label) => {
  if (expected !== actual) {
    console.log(
      `${label ?? ""} FAILURE!!! [${actual}] is not equal to [${expected}]`
    );
  }
};
