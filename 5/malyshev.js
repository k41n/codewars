const isOdd = (num) => num & 1;
const isEven = (num) => !isOdd(num);

const findOutlierDetector = (integers) => {
  let seenOdd = false;
  let seenEven = false;

  for (const integer of integers) {
    if (isOdd(integer)) {
      if (seenOdd) return isEven;
      else seenOdd = true;
    } else {
      if (seenEven) return isOdd;
      else seenEven = true;
    }
  }
};

export const findOutlier = (integers) => {
  const outlierDetector = findOutlierDetector(integers.slice(0, 3));

  for (const integer of integers) {
    if (outlierDetector(integer)) return integer;
  }
};
