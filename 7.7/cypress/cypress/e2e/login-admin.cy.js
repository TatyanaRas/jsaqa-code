const login = require("../fixtures/data-login.json");


describe("Авторизация", () => {

  beforeEach(function () {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it("Валидные данные", () => {
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Невалидные данные", () => {
    cy.login(login.invalidEmail, login.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
});

});