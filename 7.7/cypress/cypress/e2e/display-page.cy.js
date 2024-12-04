describe("main page", () => {
  it("displaying the main page", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
    cy.contains("Идёмвкино").should("be.visible");
    cy.get(".page-nav > a").should("have.length", 7);
    cy.get("div.movie__info").should("have.length", 4);
    cy.get(".movie .movie-seances__list a")
      .contains("20:00")
      .should("be.visible")
      .should("not.be.disabled");
  });
});