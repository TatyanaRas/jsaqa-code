describe('Аутентификация', () => {
  it('Валидные логин и пароль', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Log out').should('be.visible');
    cy.contains('test@test.com').should('be.visible');
  });
  it("Логин не введен  пароль валидный", () => {
    cy.visit('/');
    cy.login(' ', 'test');
    cy.get('#mail').then(($el) => $el[0].checkValidity()).should('be.false');
  });
  it("Логин валидный пароль не введен", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    //cy.login("test@test.com", " ");
    cy.get("#pass").then(($el) => $el[0].checkValidity()).should("be.false");
  });
   })

