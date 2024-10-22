'use strict';

const sum = (...args) => {
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let accumulator = 0;
  for (let arg = 1; arg < args.length; arg++) {
    accumulator += args[arg];
  }
  return accumulator;
};

module.exports = { sum };
