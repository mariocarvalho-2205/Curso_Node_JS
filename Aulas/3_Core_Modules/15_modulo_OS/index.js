const os = require('os')

console.log(os.cpus())  // verifica a cpu
console.log(os.freemem()) // verifica a memoria livre
console.log(os.totalmem()) // verifica a memoria total
console.log(os.homedir()) // verifica o diretório home
console.log(os.hostname()) // verifica o nome do host
console.log(os.networkInterfaces()) // verifica as interfaces de rede
console.log(os.type()) // verifica o tipo