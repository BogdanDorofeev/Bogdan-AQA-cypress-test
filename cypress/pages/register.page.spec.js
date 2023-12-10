export class RegisterPage {
  elementsRegisterPage = {
    title: () => cy.get("#title"),
    subTitle: () => cy.get("p.sub-title'"),
    fullNameLabel: () => cy.get("label[for ='input-name'"),
    fullNameInput: () => cy.get("#input-name"),
    emailLabel: () => cy.get("label[for ='input-email']"),
    emailInput: () => cy.get("#input-email"),
    passwordLabel: () => cy.get("label[for ='input-password']"),
    passwordInput: () => cy.get("#input-password"),
    repeatPasswordLabel: () => cy.get("label[for ='input-re-password']"),
    repeatPasswordInput: () => cy.get("#input-re-password"),
    checkBox: () => cy.get("span.custom-checkbox"),
    checkBoxText: () => cy.get("span.text"),
    termsAndConditionsLink: () => cy.get("a[target='blank']").eq(0),
    registerButton: () => cy.get("button.appearance-filled"),
    linksText: () => cy.contains("or enter with:"),
    gitIcon: () => cy.get("a.github"),
    facebookIcon: () => cy.get("a.facebook"),
    twitterIcon: () => cy.get("a.twitter"),
    registerText: () => cy.contains("Already have an account?"),
    logInLink: () => cy.get("a[routerlink='../login']"),
    fullNameErrorText: () => cy.get("p.caption.status-danger").eq(0),
    emailErrorText: () => cy.get("p.caption.status-danger").eq(1),
    passwordErrorText: () => cy.get("p.caption.status-danger").eq(2),
    rePasswordErrorText: () => cy.get("p.caption.status-danger").eq(3),
    userPicture: () => cy.get("div.user-picture")
  };
}
