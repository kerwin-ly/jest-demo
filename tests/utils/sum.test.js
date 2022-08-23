const sum = require("../../src/utils/sum");

describe("sum", () => {
  it("get sum of two nums", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
