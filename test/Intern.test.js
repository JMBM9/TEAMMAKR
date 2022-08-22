const Intern = require("../lib/Intern");
//testing functions
test("Can set school via constructor", () => {
  let testValue = "UCF";
  let member = new Intern("Foo", 1, "test@test.com", testValue);
  expect(member.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  let testValue = "Intern";
  let member = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(member.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  let testValue = "UCF";
  let member = new Intern("Foo", 1, "test@test.com", testValue);
  expect(member.getSchool()).toBe(testValue);
});
