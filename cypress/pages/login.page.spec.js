export class LoginPage {
  elementsLoginPage = {
    title: () => cy.get("#title"),
    subTitle: () => cy.get("p.sub-title"),
    emailLabel: () => cy.get('label[for ="input-email"]'),
    emailInput: () => cy.get("#input-email"),
    passwordLabel: () => cy.get('label[for ="input-password"]'),
    forgotPasswordLink: () => cy.get("a.forgot-password"),
    passwordInput: () => cy.get("#input-password"),
    checkBox: () => cy.get("span.custom-checkbox"),
    checkBoxText: () => cy.get("span.text"),
    loginButton: () => cy.get("button.appearance-filled"),
    linksText: () => cy.contains(" or enter with: "),
    gitIcon: () => cy.get("a.github"),
    facebookIcon: () => cy.get("a.facebook"),
    twitterIcon: () => cy.get("a.twitter"),
    registerText: () => cy.contains("  Don't have an account?   "),
    emailErrorText: () => cy.get("p.caption").eq(0),
    passwordErrorText: () => cy.get("p.caption").eq(1),
    userPicture: () => cy.get("div.user-picture")
  };
}
