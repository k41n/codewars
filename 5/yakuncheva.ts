function findOutlier(array: number[]): number {
  const evenCount = array
    .slice(0, 3)
    .map(isEven)
    .reduce((count, item) => count + Number(item), 0);
  const isOutlier = evenCount > 1 ? (n) => !isEven(n) : isEven;
  return array.find(isOutlier);
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

export { findOutlier };
