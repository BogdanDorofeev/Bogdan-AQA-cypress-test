describe("Home Work", () => {
  const colors = {
    Light: 'rgb(255, 255, 255)',
    Dark: "rgb(34, 43, 69)",
    Cosmic: "rgb(50, 50, 89)",
    Corporate: "rgb(255, 255, 255)",
  };

  const testName = 'Test Name';

  it("Drop-down Test 1", () => {
    cy.visit('/pages')
    cy.get('nb-layout-header nav').should('have.css','background-color', colors.Light)
    cy.get("button.select-button").click()
    cy.get('nb-option[ng-reflect-value="dark"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color', colors.Dark)
    cy.get("button.select-button").click()
    cy.get('nb-option[ng-reflect-value="cosmic"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color', colors.Cosmic)
    cy.get("button.select-button").click()
    cy.get('nb-option[ng-reflect-value="corporate"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color', colors.Corporate)
  });

  it("Text Test 2", () => {
    cy.visit('/pages/layout/accordion')
    cy.contains('button','Toggle First Item').click()
    cy.get('div.item-body').eq(0).should('be.visible')

  });

  
  it("Hover Test 3", () => {
    cy.visit('/pages/modal-overlays/popover')
    cy.get('button[nbpopoverplacement="right"]').trigger("mouseenter")
    cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
   

  });

  it("Dialog Test 4", () => {
    cy.visit('/pages/modal-overlays/dialog')
    cy.get('.result-from-dialog button').click()
    cy.get('input[placeholder="Name"]').should('be.visible')
    cy.get('input[placeholder="Name"]').type(testName)
    cy.get('button.status-success').click()
    cy.get('.result-from-dialog ul li').should('contain', testName)

  });
});
