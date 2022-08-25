import { convertUrlStrToObj } from "@/utils/location";

describe("convertUrlStrToObj", () => {
  it("Get current url query object", () => {
    window.location.assign("https://www.test.com?name=kerwin&id=123");
    expect(convertUrlStrToObj()).toEqual({ name: "kerwin", id: "123" });
  });
});
