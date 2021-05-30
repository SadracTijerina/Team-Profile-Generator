const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("checks if employee has all the properties & functions needed", () => {
  const employee = new Employee("Sadrac", 3, "email");
  expect(employee.name).toEqual("Sadrac");
  expect(employee.id).toEqual(3);
  expect(employee.email).toEqual("email");
  expect(employee.getName()).toEqual("Sadrac");
  expect(employee.getId()).toEqual(3);
  expect(employee.getEmail()).toEqual("email");
  expect(employee.getRole()).toEqual("Employee");
});
