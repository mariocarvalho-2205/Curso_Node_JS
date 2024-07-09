// ler argumentos

// nome

console.log(process.argv)

/**
// $ node index.js nome=Mario linha de comando

array retornado
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\mario\\Desktop\\Programação\\Node JS\\Fundamentos\\04 ler argumentos\\
index.js',
  'nome=Mario'
]
 */

// pegando o valor da propriedade nome
const args = process.argv.slice(2)

console.log(args)

// resgatando so o valor
const nome = args[0].split('=')[1]
const idade = args[1].split('=')[1]

console.log(`O nome digitado foi ${nome}, e sua idade é ${idade}`)