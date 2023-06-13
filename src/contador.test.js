import contar from "./contador.js";

describe("Contar", () => {
  it("Debería retornar 1 como palabra", () => {
    expect(contar("hola")).toEqual("hola: 1");
  });
});
