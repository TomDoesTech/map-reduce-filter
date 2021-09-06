/*
 * Filter is used to do exactly what it sounds like:
 * filter an array of values down to a new array that match a condition.
 */

const faker = require("faker");
/*
 * Copy the code from map to create an array of users
 */

const users = Array(10)
  .fill(undefined)
  .map(() => {
    return {
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      age: faker.datatype.number(100),
    };
  });

/*
 * Create an array of users with an age of greater than 60
 */

const oldies = users.filter((user) => {
  return user.age > 60;
});
console.log({ oldies });

/*
 * Create an array of users with an even age
 */

const even = users.filter((user) => {
  return user.age % 2 === 0;
});
console.log({ even });
/*
 * Create an array of users that have a
 * first or last name that starts with A, B, C, or D
 */
const test = ["a", "b", "c", "d"];
const u = users.filter((user) => {
  const letters = [
    user.firstName.substr(0, 1).toLowerCase(),
    user.lastName.substr(0, 1).toLowerCase(),
  ];

  return test.some((i) => letters.includes(i));
});

console.log({ u });
