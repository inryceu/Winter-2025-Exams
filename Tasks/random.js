// Refactor following solution
// Generate random integer value in given range
"use strict";

const random = (min, max = min) => {
  if (min === max) {
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = random;
