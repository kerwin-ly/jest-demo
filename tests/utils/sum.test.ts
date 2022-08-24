import sum from "@/utils/sum";

describe("sum", () => {
  it("Get sum of two nums", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
