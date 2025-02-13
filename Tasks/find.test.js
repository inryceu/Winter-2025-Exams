"use strict";

const check = require("../check.js");

const cases = [
  [[{ a: 1, b: 2, c: "hello", d: false }, "hello"], "c"],
  [[{ a: 1, b: 2, c: "str", d: false }, "hello"], undefined],
  [[{ a: 1, b: 2, c: "hello", d: false }, 2], "b"],
  [[{ a: 1, b: 2, c: "hello", d: false }, false], "d"],
  [[{ a: 1, b: 2, c: "hello", d: true }, true], "d"],
];

check(cases)("find");
