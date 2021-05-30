const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

test("checks if manager has all the properties & functions needed", () => {
  const manager = new Manager("Sadrac", 3, "email", 123);
  expect(manager.name).toEqual("Sadrac");
  expect(manager.id).toEqual(3);
  expect(manager.email).toEqual("email");
  expect(manager.officeNumber).toEqual(123);

  expect(manager.getName()).toEqual("Sadrac");
  expect(manager.getId()).toEqual(3);
  expect(manager.getEmail()).toEqual("email");
  expect(manager.getRole()).toEqual("Manager");
});
