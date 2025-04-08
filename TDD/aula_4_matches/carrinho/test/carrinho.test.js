import Carrinho from "../carrinho";
import Item from "../item";
/*
O Jest utiliza funções chamadas de matchers (em português, algo como “combinadoras”), 
que servem para verificar e comparar resultados esperados e recebidos nos testes - ou seja, 
essas funções verificam se os resultados “combinam” entre si. 

Existe uma variedade de matchers, cada qual para uma finalidade diferente.
Os matchers podem ser do tipo:
Comuns: usados para testar igualdade de valores de forma exata;
Veracidade: usados para distinguir de forma explícita entre undefined, null e false;
Number: usados para comparar números equivalentes;
String: usados para verificar expressões regulares;
Arrays e iteráveis: usados para verificar a inclusão de um item em um array ou iterável;
Exceções: usado para testar se uma função lança um erro quando chamada;
*/

describe("Testes do carrinho", () => {
    it("Deve inicializar vazio", () => {
        const carrinho = new Carrinho();
        // para verificar se o campo e null utilizamos o toBeNull()
        expect(carrinho.subtotal).toBeNull();
    }) 

    it("Deve ter itens", () => {
        const item = new Item("Banana", 2, 5);
        const item2 = new Item("Maça", 0.5, 1);

        const carrinho = new Carrinho();
        carrinho.adiciona(item)
        carrinho.adiciona(item2)

        expect(typeof carrinho).toBe("object");
        expect(carrinho.itens[0]).toBe(item)
        expect(carrinho.itens[1]).toBe(item2)

        // verifica se tem o item no array
        expect(carrinho.itens).toContain(item2);
    })

    it("Deve ter a propriedade 'total' na inicialização", () => {
        const carrinho = new Carrinho()

        expect(carrinho).toHaveProperty("total");

    })
})