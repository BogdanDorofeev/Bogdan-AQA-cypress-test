import { RegisterPage } from "../pages/register.page.spec.js";

describe("Register page Tests", () => {
  const registerPage = new RegisterPage();

  it("Successful registration 1", () => {
    cy.visit("/auth/register");
    registerPage.elementsRegisterPage.fullNameInput().click();
    registerPage.elementsRegisterPage.fullNameInput().type("Bogdan Dorofeev");
    registerPage.elementsRegisterPage.emailInput().click();
    registerPage.elementsRegisterPage.emailInput().type("example1@gamil.com");
    registerPage.elementsRegisterPage.passwordInput().click();
    registerPage.elementsRegisterPage.passwordInput().type("redcow1");
    registerPage.elementsRegisterPage.repeatPasswordInput().click();
    registerPage.elementsRegisterPage.repeatPasswordInput().type("redcow1");
    registerPage.elementsRegisterPage.checkBox().click();
    registerPage.elementsRegisterPage.registerButton().click();
    registerPage.elementsRegisterPage.userPicture().should("be.visible");
  });

  it("Validation check 2", () => {
    cy.visit("/auth/register");
    registerPage.elementsRegisterPage.fullNameInput().click();
    registerPage.elementsRegisterPage.fullNameInput().type("s");
    registerPage.elementsRegisterPage.emailInput().click();
    registerPage.elementsRegisterPage.emailInput().type("asd");
    registerPage.elementsRegisterPage.passwordInput().click();
    registerPage.elementsRegisterPage.passwordInput().type("1");
    registerPage.elementsRegisterPage.repeatPasswordInput().click();
    registerPage.elementsRegisterPage.repeatPasswordInput();
    registerPage.elementsRegisterPage.checkBox().click();
    registerPage.elementsRegisterPage.fullNameErrorText().should("contain", " Full name should contains from 4 to 50 characters ");
    registerPage.elementsRegisterPage.emailErrorText().should("contain", "Email should be the real one!");
    registerPage.elementsRegisterPage.passwordErrorText().should("contain", "Password should contain from 4 to 50 characters");
    registerPage.elementsRegisterPage.rePasswordErrorText().should("contain", "Password confirmation is required!");
  });
});
