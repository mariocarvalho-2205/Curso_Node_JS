const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

// assim extraimos os valores passados nos argumentos 
const nome = args['nome']  
const profissao = args['profissao']

console.log(`nome e ${nome}, e sua profissao é ${profissao}`)

/**
 * 
 * comandos para passar valores aos argumentos
$ node index.js --nome=Mario  --profissao=Programador// comando
{ _: [], nome: 'Mario' }
Mario
 */