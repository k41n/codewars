const validation = (input) => {
  if (!input) throw new Error("Input value is require");

  if (!Array.isArray(input)) throw new Error("Input value must be array");

  if (input.some((item) => typeof item !== "number"))
    throw new Error("Item in array must have a number type");
};

const partyPeople = (people) => {
  validation(people);
  const compactPeopleObj = {};
  people.forEach((item) => {
    const curentPeaopleCount = compactPeopleObj[item];
    if (curentPeaopleCount != null) compactPeopleObj[item]++;
    else compactPeopleObj[item] = 1;
  });

  let subCountOfPeople = 0;
  const sumOfPeopleObj = {};
  for (const key in compactPeopleObj) {
    subCountOfPeople += compactPeopleObj[key];
    sumOfPeopleObj[key] = subCountOfPeople;
  }

  let countOfPeople = 0;

  for (const key in sumOfPeopleObj) {
    if (key <= sumOfPeopleObj[key]) countOfPeople = sumOfPeopleObj[key];
  }

  return countOfPeople;
};

export { partyPeople };
