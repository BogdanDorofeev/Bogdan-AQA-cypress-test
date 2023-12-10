import { LoginPage } from "../pages/login.page.spec.js";

describe("Login page Tests", () => {
  const loginPage = new LoginPage();

  it("Successful registration 1", () => {
    cy.visit("/auth/login");

    loginPage.elementsLoginPage.emailInput().click();
    loginPage.elementsLoginPage.emailInput().type("example1@gamil.com");
    loginPage.elementsLoginPage.passwordInput().click();
    loginPage.elementsLoginPage.passwordInput().type("redcow1");
    loginPage.elementsLoginPage.checkBox().click();
    loginPage.elementsLoginPage.loginButton().click();
    loginPage.elementsLoginPage.userPicture().should("be.visible");
  });

  it("Validation check 2", () => {
    cy.visit("/auth/login");

    loginPage.elementsLoginPage.emailInput().click();
    loginPage.elementsLoginPage.emailInput().type("asd");
    loginPage.elementsLoginPage.passwordInput().click();
    loginPage.elementsLoginPage.passwordInput().type("asd");
    loginPage.elementsLoginPage.checkBox().click();
    loginPage.elementsLoginPage.emailErrorText().should("contain", "Email should be the real one!");
    loginPage.elementsLoginPage.passwordErrorText().should("contain", "Password should contain from 4 to 50 characters");
  });
});
