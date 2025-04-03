const somaHorasExtras = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculoDescontos = (salario, descontos) => salario - descontos;

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`Teste ${titulo} passou!`);
  } else {
    console.log(`Teste ${titulo} falhou! Esperado: ${esperado}, Retorno: ${retornado}`);
  }
};
// Testes
teste("soma Horas Extras", 2500, somaHorasExtras(2000, 500));
teste("calculo Descontos", 2200, calculoDescontos(2500, 300));