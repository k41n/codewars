const peoplesStayConditionsInputValidation = (input) => {
  if (!Array.isArray(input))
    throw new Error("The function argument is not an array");

  if (input.some((item) => typeof item !== "number"))
    throw new Error("The array must consist of numbers");
};

const partyPeople = (peoplesStayConditions) => {
  peoplesStayConditionsInputValidation(peoplesStayConditions);

  if (peoplesStayConditions.length === 0) return 0;

  const sortedPeoplesStayConditions = [...peoplesStayConditions].sort(
    (previousValue, nextValue) => nextValue - previousValue
  );

  let remainingPeople = sortedPeoplesStayConditions.length;
  let personIndex = 0;

  while (sortedPeoplesStayConditions[personIndex] > remainingPeople) {
    remainingPeople--;
    personIndex++;
  }

  return remainingPeople;
};

export { partyPeople };
