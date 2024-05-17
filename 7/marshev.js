function partyPeopleInputValidation(peopleList) {
  if (!peopleList) throw new Error("People list is required");

  if (!Array.isArray(peopleList))
    throw new Error("People list must be an array");

  if (peopleList.some((p) => typeof p !== "number"))
    throw new Error("People list must be an array of numbers");
}

function partyPeople(peopleList) {
  partyPeopleInputValidation(peopleList);

  let currentPeopleCount = peopleList.length;
  const initPeopleCount = currentPeopleCount;

  const sortedPeople = peopleList.slice().sort((a, b) => b - a);

  for (let indexOfPeople = 0; indexOfPeople < initPeopleCount; indexOfPeople++)
    if (sortedPeople[indexOfPeople] > currentPeopleCount) currentPeopleCount--;

  return currentPeopleCount;
}

export { partyPeople };
