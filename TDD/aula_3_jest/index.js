const somaHorasExtras = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculoDescontos = (salario, descontos) => salario - descontos;

export { somaHorasExtras, calculoDescontos };

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou!`);
  } catch {
    console.error(`${titulo} não passou!!!`);
  }
};

// flag oara o jest com es6
// "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
//     "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --watch",
//     "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --coverage"
