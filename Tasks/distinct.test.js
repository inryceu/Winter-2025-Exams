"use strict";

const check = require("../check.js");

const cases = [
  [[[1, 2, 1, 3, 1, 4]], [1, 2, 3, 4]],
  [[[1, 2, -1, 3, 0, 4]], [1, 2, -1, 3, 0, 4]],
  [[[1]], [1]],
  [[[1, 1, 1]], [1]],
  [[[0]], [0]],
  [[[0, 0]], [0]],
  [[[0, 0, 0]], [0]],
  [[[0, 0, 0, 0]], [0]],
  [[[]], []],
];

check(cases)("distinct");
