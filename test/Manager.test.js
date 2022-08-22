const Manager = require("../lib/Manager");


test("Can set office number via constructor argument", () => {
  let testValue = 100;
  let member = new Manager("Foo", 1, "test@test.com", testValue);
  expect(member.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  let testValue = "Manager";
  let member = new Manager("Foo", 1, "test@test.com", 100);
  expect(member.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  let testValue = 100;
  let member = new Manager("Foo", 1, "test@test.com", testValue);
  expect(member.getOfficeNumber()).toBe(testValue);
});
