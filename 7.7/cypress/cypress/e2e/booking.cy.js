const selector = require("../fixtures/data-booking-selector.json");
const login = require("../fixtures/data-login.json");


describe('template spec', () => {
  it("бронирование фильма по названию из админки", () => {

    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(login.validEmail, login.validPassword);

    cy.get('[draggable="true"][data-film-id="122"] > .conf-step__movie-title')
      .then(($el) => $el.textContent)
      .should("have.text", 'Микки маус');
    cy.get('[draggable="true"][data-film-id="122"] > .conf-step__movie-title').invoke('text').then((text) => {
    
      cy.visit("qamid.tmweb.ru");
      
      cy.get(".page-nav__day_chosen").click();
      cy.get(":nth-child(3) > .movie__info > .movie__description > .movie__title").should('have.text', text);
      cy.get(
        ":nth-child(3) > :nth-child(3) > .movie-seances__list> .movie-seances__time-block > .movie-seances__time"
      )
        .contains("18:00")
        .click({ force: true });
      cy.contains('Идёмвкино').should('be.visible');
      cy.get(selector.place).click();
      cy.contains("Забронировать").click();
      
      cy.contains("Получить код бронирования").should('be.visible');//".ticket__info-wrapper > :nth-child(8)"
      cy.get(selector.booking).contains(
        "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
      ).should('be.visible');
      
      });
  });
})