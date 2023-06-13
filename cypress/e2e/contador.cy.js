describe("Contador", () => {
    it("Muestra la cantidad de palabras", () => {
      cy.visit("index.html");
      cy.get("#primera-fase").type(hola);
      cy.get("#contar-button").click();
      cy.get("#resultado-div").should("contain", "hola: 1");
    });
  });
  