const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

test("checks if employee has all the properties & functions needed", () => {
  const engineer = new Engineer("Sadrac", 3, "email", "github");
  expect(engineer.name).toEqual("Sadrac");
  expect(engineer.id).toEqual(3);
  expect(engineer.email).toEqual("email");
  expect(engineer.github).toEqual("github");

  expect(engineer.getName()).toEqual("Sadrac");
  expect(engineer.getId()).toEqual(3);
  expect(engineer.getEmail()).toEqual("email");
  expect(engineer.getRole()).toEqual("Engineer");
  expect(engineer.getGithub()).toEqual("github");
});
