const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

test("checks if employee has all the properties & functions needed", () => {
  const intern = new Intern("Sadrac", 3, "email", "UTA");
  expect(intern.name).toEqual("Sadrac");
  expect(intern.id).toEqual(3);
  expect(intern.email).toEqual("email");
  expect(intern.school).toEqual("UTA");

  expect(intern.getName()).toEqual("Sadrac");
  expect(intern.getId()).toEqual(3);
  expect(intern.getEmail()).toEqual("email");
  expect(intern.getRole()).toEqual("Intern");
  expect(intern.getSchool()).toEqual("UTA");
});
