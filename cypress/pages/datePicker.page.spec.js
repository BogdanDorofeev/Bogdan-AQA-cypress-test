export class DatePickerPage {
  elementsDatePickerPage = {
    dateInput: () => cy.get("input[placeholder='Form Picker']"),
    datePicker: () => cy.get("nb-card-body[ng-reflect-ng-switch='date']"),
  };
}
