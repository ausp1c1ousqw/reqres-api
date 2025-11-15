import { Given, Then, When } from "@cucumber/cucumber";
import UserRequest from "../../src/UserRequest.js";

Given("I register a new user with the following data:", async function (data) {
  this.response = await UserRequest.registerUser(data);
});
Then("the registration should return a token", function () {
  this.response.verifyToken();
});

When("I login with the following data:", async function (data) {
  this.response = await UserRequest.login(data);
});

Then("the login response should contain a token", function () {
  this.response.verifyToken();
});

When("the HR requests the list of employees on page {int}", async function (pageNumber) {
  this.response = await UserRequest.getUsersOnSpecificPage(pageNumber);
});
Then("the system should return a list of employees", function () {
  this.response.verifyEmployeesList();
});
Then("the page should be {int}", function (pageNumber) {
  this.response.verifyPage(pageNumber);
});
When("I update the user with the following data:", async function (data) {
  const userId = this.response.res.body.id;
  this.response = await UserRequest.updateUser(userId, data);
});
Then("the response body should contain:", function (data) {
  this.response.verifyThatBodyContain(data);
});
Then("the response body should have a valid updatedAt timestamp", function () {
  this.response.verifyUpdateAt();
});
