export class ForgotPasswordPage {
  elementsForgotPasswordPage = {
    title: () => cy.get("#title"),
    subTitle: () => cy.get("p.sub-title"),
    emailLabel: () => cy.get('label[for ="input-email"]'),
    emailInput: () => cy.get("#input-email"),
    emailErrorText: () => cy.get("p.caption"),
    requestPasswordButton: () => cy.get("button.appearance-filled"),
    backToLoginLink: () => cy.get('a[routerlink="../login"]'),
    registerLink: () => cy.get('a[routerlink="../register"]'),
    userPicture: () => cy.get("div.user-picture"),
   
  };
}
