import { somaHorasExtras, calculoDescontos } from "../index";

describe("Testes dos calculos de folha", () => {
  // substituimos a palavra test para it
  it("Deve retornar a soma das horas extras", () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 600);
  
    expect(retornado).toBe(esperado);
  });
  
  test("Deve descontr o salario", () => {
    const esperado = 2300;
    const retornado = calculoDescontos(2500, 200);
  
    expect(retornado).toBe(esperado);
  });

});