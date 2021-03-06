const metriclcs = require("."),
assert = require("assert");

assert(isNaN(metriclcs(1,null)),"Non-string arguments should return NaN");
assert.equal(metriclcs("ABCDE","ABCDE"),1,"Equal strings should return 1");
assert.equal(metriclcs("ABC","DEF"),0,"Completely dissimiliar strings should return 0");
assert.equal(metriclcs("ABDEF", "ABDIF"),.8,"Should be very similiar");

console.log("All tests passed");