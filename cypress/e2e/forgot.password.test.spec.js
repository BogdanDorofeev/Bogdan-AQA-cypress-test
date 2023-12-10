import { ForgotPasswordPage } from "../pages/forgotPassword.page.spec.js";


describe("Forgot password page Tests", () => {
  const forgotPasswordPage = new ForgotPasswordPage();


  it("Success test 1", () => {
    cy.visit("/auth/request-password");
    forgotPasswordPage.elementsForgotPasswordPage.emailInput().click();
    forgotPasswordPage.elementsForgotPasswordPage.emailInput().type("examaple@gmail.com");
    forgotPasswordPage.elementsForgotPasswordPage.requestPasswordButton().click();
    forgotPasswordPage.elementsForgotPasswordPage.userPicture().should("be.visible");
  });

  it("Validation check 2", () => {
    cy.visit("/auth/request-password");
    forgotPasswordPage.elementsForgotPasswordPage.emailInput().click();
    forgotPasswordPage.elementsForgotPasswordPage.emailInput().type("asd");
    forgotPasswordPage.elementsForgotPasswordPage.title().click();
    forgotPasswordPage.elementsForgotPasswordPage.emailErrorText().should("contain", "Email should be the real one!");
 
  });

  it("Back to login button test 3", () => {
    cy.visit("/auth/request-password");
    forgotPasswordPage.elementsForgotPasswordPage.backToLoginLink().click();
    cy.url().should('include', '/auth/login');
 
  });

  it("Register button test 4", () => {
    cy.visit("/auth/request-password");
    forgotPasswordPage.elementsForgotPasswordPage.registerLink().click();
    cy.url().should('include', '/auth/register');
    
 
  })
});
