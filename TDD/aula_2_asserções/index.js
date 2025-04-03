const somaHorasExtras = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculoDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(valorEsperado) {
      if (valor !== valorEsperado) {
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  // if (esperado === retornado) {
  //   console.log(`Teste ${titulo} passou!`);
  // } else {
  //   console.log(`Teste ${titulo} falhou! Esperado: ${esperado}, Retorno: ${retornado}`);
  // }

  try {
    funcaoDeTeste();
    console.log(`${titulo} passou!`);
  } catch {
    console.log(`${titulo} não passou!`);
  }
};

// Testes
teste("somaHorasExtras", () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
teste("calculoDescontos", () => {
  const esperado = 2300;
  const retornado = calculoDescontos(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});