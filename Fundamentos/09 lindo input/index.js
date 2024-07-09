// import chalk from 'chalk'
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("Qual o seu nome? ", (nome) => {
    const name = nome
    console.log(`Muito prazer ${name}`)
    readline.close()
    
})

