import { config } from "@/utils/env";

describe("spyOn config", () => {
  it("dev", () => {
    jest.spyOn(config, "env", "get").mockReturnValue("dev"); // Mock getEnv function, the return value would be 'dev';
    expect(config.env).toEqual("dev");
  });

  it("prod", () => {
    jest.spyOn(config, "env", "get").mockReturnValue("prod"); // Mock getEnv function, the return value would be 'prod';
    expect(config.env).toEqual("prod");
  });
});
