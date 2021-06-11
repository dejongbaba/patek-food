import { uuid } from "./fx";

describe("to show the uuid works", () => {
  test("should return a unique uuid of type string", () => {
    expect(uuid()).toBeInstanceOf("string");
  });
});
