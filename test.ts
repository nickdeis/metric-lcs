import metriclcs from "./src";
import { describe, it } from "node:test";
import { equal } from "assert";

describe("metriclcs", () => {
  it("Non-string arguments should return NaN", () => {
    equal(isNaN(metriclcs(1 as any, null as any)), true);
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