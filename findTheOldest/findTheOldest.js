const findTheOldest = function (people) {
  const sorted = people.sort(function (a, b) {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return sorted[0];
};

const findTheOldest_ = function (people) {
  let oldestAge = 0;
  const oldestPerson = people.reduce((acc, currentPerson) => {
    const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    if (currentAge > oldestAge) {
      oldestAge = currentAge;
      return currentPerson;
    }
    return acc;
  }, 0);
  return { Person: oldestPerson, Age: oldestAge };
};

module.exports = findTheOldest;
