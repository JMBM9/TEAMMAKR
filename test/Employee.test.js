const Employee = require("../lib/Employee");
//test funcions 
test("Can instantiate Employee instance", () => {
  let member = new Employee();
  expect(typeof(member)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  let name = "John";
  let member = new Employee(name);
  expect(member.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  let testValue = 100;
  let member = new Employee("Foo", testValue);
  expect(member.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  let testValue = "test@test.com";
  let member = new Employee("Foo", 1, testValue);
  expect(member.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  let testValue = "Michael";
  let member = new Employee(testValue);
  expect(member.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  let testValue = 100;
  let member = new Employee("Foo", testValue);
  expect(member.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  let testValue = "test@test.com";
  let member = new Employee("Foo", 1, testValue);
  expect(member.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  let testValue = "Employee";
  let member = new Employee("Alice", 1, "test@test.com");
  expect(member.getRole()).toBe(testValue);
});
