/**
 * Event Loop e um recurso do node que garante a execução de cima para baixo
 * respeitando a ordem de leitura
 */

function a() {
	console.log("executando function A");
}

function b() {
	console.log("executando function B");
}

function c() {
	console.log("executando function C");
	console.log("Dentro da função C");
    // as funcçoes a e b so serao chamadas depois da execução da função C
	a();
	b();
}

// sera executado na ordem chamada
c();
a();
b();
