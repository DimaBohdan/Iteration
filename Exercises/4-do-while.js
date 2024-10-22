'use strict';

const sum = (...args) => {
  // Use do..while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  const len = args.length;
  let i = 0;
  let accumulator  = 0;
  do {
    accumulator += args[i];
    i++;
  }
  while (i < len);
  return accumulator;
};

module.exports = { sum };
