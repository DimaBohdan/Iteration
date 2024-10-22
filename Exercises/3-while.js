'use strict';

const sum = (...args) => {
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  const len = args.length;
  let i = 0;
  let accumulator  = 0;
  while (i < len) {
    accumulator += args[i];
    i++;
  }
  return accumulator;
};

module.exports = { sum };
