'use strict';

const sum = (...args) => {
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let accumulator;
  for (const arg of args) {
    accumulator += arg;
  }
  return accumulator;
};

module.exports = { sum };
