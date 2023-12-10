import moment from 'moment';
import { DatePickerPage } from "../pages/DatePicker.page.spec.js";

const datePickerPage = new DatePickerPage();

describe("Date picker test", () => {
  const today = moment().format("MMM D, YYYY");
  const dateToday = moment().format("D");
  

  it("Date picker test", () => {
    cy.visit("/pages/forms/datepicker");
    datePickerPage.elementsDatePickerPage.dateInput().click();
    datePickerPage.elementsDatePickerPage.datePicker().contains(dateToday).click();
    datePickerPage.elementsDatePickerPage.dateInput().should('have.value', today);
  });
});
