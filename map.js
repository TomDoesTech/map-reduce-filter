/*
 * Map will call a provided function for each item in the array.
 * The function must return the new value that will
 * be stored in the current element's position.
 */
const faker = require("faker");

/*
 * Create an array of 10 users with firstName, lastName & age
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

console.log({ users });

/*
 * Combine the user's firstName & lastName in a field called name
 * make sure the user does not lose any other properties
 */

function getUsername(user) {
  return {
    ...user,
    name: `${user.firstName} ${user.lastName}`,
  };
}

const usersWithName = users.map(getUsername);

console.log({ usersWithName });

/* Add an email address to each user that is the
 * first letter of their first name,
 * followed by a period
 * followed by their last name and @example.com
 */

const usersWithEmail = usersWithName.map((user) => {
  return {
    ...user,
    email: `${user.firstName
      .substr(0, 1)
      .toLowerCase()}.${user.lastName.toLowerCase()}@example.com`,
  };
});

console.log({ usersWithEmail });
