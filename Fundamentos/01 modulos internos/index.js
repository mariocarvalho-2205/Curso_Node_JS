const meuModulo = require('./meu_modulo'); // importando o modulo
const soma = meuModulo.soma  // chama o modulo que esra sendo exportado
const multi = meuModulo.multi
const divi = meuModulo.divi

soma(2, 4)
soma(5, 4)
multi(5, 6)
divi(100, 5)
