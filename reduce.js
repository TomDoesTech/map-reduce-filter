/*
 * Reduce is the trickiest of the methods and the most controversial.
 * Reduce will return a new value and should be used to reduce an array
 * of data down to a single value
 */

const faker = require("faker");
/*
 * Copy the code from map to create an array of users
 * and give each user a uuid
 */

const users = Array(10)
  .fill(undefined)
  .map(() => {
    return {
      id: faker.random.uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      age: faker.datatype.number(100),
    };
  });

console.log({ users });
/*
 * Find the sum of all user's age
 */

const sum = users.reduce((acc, curr) => {
  acc = acc + curr.age;
  return acc;
}, 0);

console.log({ sum });

/*
 * Get the average age of all users
 */

const average = users.reduce((acc, curr, index) => {
  acc += curr.age;
  if (index === users.length - 1) {
    return acc / users.length;
  } else {
    return acc;
  }
}, 0);

console.log({ average }, sum / users.length);

/*
 * Transform the array of users into an object with the user's id as the key
 */

const userObject = users.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log({ userObject });
