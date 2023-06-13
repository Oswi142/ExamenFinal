import contar from "./contador.js";

describe("Contar", () => {
  it("Debería retornar 1 como palabra", () => {
    expect(contar("hola")).toEqual(1);
  });
  it("Debería retornar 2 como apariciones", () => {
    expect(contar("hola mundo")).toEqual(2);
  });
});
