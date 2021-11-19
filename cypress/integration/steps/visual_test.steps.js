import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const openPage = require("../pages/home.js");
const { singinButtom, typeEmail } = require("../pages/authentication");
const {
  genderButton,
  typeInfo,
  selectInfo,
} = require("../pages/create_an_account");
const { buttonlogo } = require("../pages/account_page");
const picture = require("../pages/screenshotHome");

Given("I open the test page", () => {
  openPage();
});

When("I click the {string} button in authentication page", (elementName) => {
  singinButtom(elementName);
});

When("I click the {string} button in create an account page", (elementName) => {
  genderButton(elementName);
});

When("I click the {string} button in my account page", (elementName) => {
  buttonlogo(elementName);
});

When(
  "I type {string} in the {string} field in authentication page",
  (text, elementName) => {
    typeEmail(text, elementName);
  }
);

When(
  "I type {string} in the {string} field in create an account page",
  (text, elementName) => {
    typeInfo(text, elementName);
  }
);

When(
  "I Select {string} in the {string} dropdown in create an account page",
  (text, elementName) => {
    selectInfo(text, elementName);
  }
);

When("I take a {string} in the principal page", (elementName) => {
  picture(elementName);
});
