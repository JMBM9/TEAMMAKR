const Engineer = require("../lib/Engineer");
//testing functions 
test("Can set GitHUb account via constructor", () => {
  let testValue = "GitHubUser";
  let member = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(member.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  let testValue = "Engineer";
  let member = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(member.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  let testValue = "GitHubUser";
  let member = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(member.getGithub()).toBe(testValue);
});
