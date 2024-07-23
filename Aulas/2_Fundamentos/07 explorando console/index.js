// mais de uma variavel
const a = 10
const b = "Mário Carvalho"
const c = [1, 2, 3]
const d = {
    nome: "mario",
    idade: 48
}
console.log( a, b, c, d)

// contagem de impressões
console.count(`O valor de a é ${a}, contagem`)
console.count(`O valor de a é ${a}, contagem`)
console.count(`O valor de a é ${a}, contagem`)

// variavel entre string - utilizamos o %s
console.log("O nome é %s, ele é programador", b)
console.log("O valor %i é o valor de a", a)

// error
console.error(b)
// limpar o console
setTimeout(() => {
    console.clear()
}, 2000)