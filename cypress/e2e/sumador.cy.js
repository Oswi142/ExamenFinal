describe("Contador", () => {
  it("Muestra la cantidad de palabras", () => {
    cy.visit("/");
    cy.get("#primera-fase").type(hola);
    cy.get("#contar-button").click();
    cy.get("#resultado-div").should("contain", "1");
  });
});
