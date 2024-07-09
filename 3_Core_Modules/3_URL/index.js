const url = require("url")
const adress = "http://www.meusite.com.br/catalog?produtos=cadeira"
const parseUrl = new url.URL(adress)

console.log(parseUrl.host)              // mostra a url do site 
console.log(parseUrl.pathname)          // mostra a rota 
console.log(parseUrl.search)            // mostra o parametro de pesquisa
console.log(parseUrl.searchParams)          // mostra o objeto da rota e da pesquisa
console.log(parseUrl.searchParams.get('produtos'))  // exibe o parametro pesquisado