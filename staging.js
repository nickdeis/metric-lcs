const metriclcs = require("./dist/index.js");
const { describe, it } = require("node:test");
const { equal } = require("assert");

describe("metriclcs staging plain js", () => {
  it("Non-string arguments should return NaN", () => {
    equal(isNaN(metriclcs(1, null)), true);
  });
  it("Equal strings should return 1", () => {
    equal(metriclcs("ABCDE", "ABCDE"), 1);
  });
  it("Completely dissimiliar strings should return 0", () => {
    equal(metriclcs("ABC", "DEF"), 0);
  });
  it("Should be very similiar", () => {
    equal(metriclcs("ABDEF", "ABDIF"), 0.8);
  });
});
