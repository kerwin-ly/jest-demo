// Use Jest plugin to mock `window.location`
import "jest-location-mock";

// Provide DOM Matcher Api
import "@testing-library/jest-dom";

// Mock HTTP
import server from "./mockServer/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

// Mock console.xxx
jest.spyOn(console, "log").mockImplementation();
jest.spyOn(console, "warn").mockImplementation();
jest.spyOn(console, "error").mockImplementation();
