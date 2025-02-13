// Refactor following solution
// Generate random password
"use strict";

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let key = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * max);
    key += alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
