'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    const age = person.died - person.born;
    result[person] = age;
  }
  return result;
};

module.exports = { ages };
