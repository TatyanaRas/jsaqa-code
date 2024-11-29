describe('Избранное', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login("test@test.com", "test");
  });
  
  it('Добавим книгу1 в избранное', () => {
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("Алиса в стране чудес");
    cy.get("#description").type("Приключения и превращения Алисы");
    cy.get("#authors").type("Льюис Кэррол");
    cy.get('form > .ml-2').click();
    cy.contains("Add to favorite").should("be.visible");
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").should("be.visible");
  });

  it('Просмотреть информацию о книге в избранном', () => {
    cy.contains("Favorites").click();
    cy.contains("Алиса в стране чудес").click();
    cy.contains("Dowload book").should("be.visible");
    })
    //cy.get('[href="book/68ef656f-2f8f-4649-b683-dfb3aa096939"] > .h-100 > .card-body').click();
    //cy.get(".card-body").click();
    //cy.contains("Алиса в стране чудес").should("be.visible");
    

 it('Удаляем книгу1 из избранного', () => {
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
})