import chalk from 'chalk'

console.log(chalk.blue('Hello world!'));

const nota = 7

if (nota > 6) {
    console.log(chalk.green(`Parabens! sua nota foi ${nota}. Aprovado!!`))
} else {
    console.log(chalk.bgRed.black(`Ohhh! sua nota foi ${nota}. Não foi dessa vez!!`))

}

/*
! Aparentemente funciona se eu inserir "type": "module", no package.json. Não sei porque. Import funciona mas com o const não.

"name": "lib-markdown",
  "version": "1.0.0",
  "type": "module",  // adicionar essa linha no package.json
  "main": "index.js",

  Isso acontece porque o módulo que você tá tentando importar foi convertido pra importação do tipo ESM, que por sinal não aceita mais o require(), por isso você deve utilizar a nova forma de importação no node

import chalk from 'chalk';COPIAR CÓDIGO
e especificar no package.json o tipo de importação

"type": "module"
*/