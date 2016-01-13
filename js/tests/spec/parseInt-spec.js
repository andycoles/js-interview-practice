"use-strict";

var parseInt_lib = require('../../parseInt');

describe("#parseInt", function() {
  it("returns the number representation of the string", function() {
    var stringToNum = parseInt_lib("1234567890");
    expect(stringToNum).toBe(1234567890);
  });
});
