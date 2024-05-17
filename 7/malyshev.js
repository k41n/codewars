export const partyPeople = (input) => {
  // Contains the number of people who have requirement equal to the index in that array.
  const peopleByRequirement = [];
  // Total number of people left.
  let totalCount = input.length;

  for (const person of input) {
    if (person <= totalCount) {
      peopleByRequirement[person] = (peopleByRequirement[person] ?? 0) + 1;
    } else {
      totalCount--;
    }
  }

  debugger;

  for (
    let requirementIndex = peopleByRequirement.length - 1;
    requirementIndex >= 0;
    requirementIndex--
  ) {
    const peopleWithThatRequirement = peopleByRequirement[requirementIndex];
    if (!peopleWithThatRequirement) continue;

    if (peopleWithThatRequirement && totalCount < requirementIndex) {
      totalCount -= peopleWithThatRequirement;
    }
  }

  return totalCount;
};
