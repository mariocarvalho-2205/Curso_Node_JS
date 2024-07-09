// usar esse npm para a instalação
// npm install inquirer@8.1.2

const inquirer = require("inquirer");

// aqui gera o modulo das perguntas
inquirer
	.prompt([
        // perguntas enviadas no prompt
		{
			name: "p1",  // respostas sao armazenadas aqui
			message: "Qual o seu nome? ",
		},
		{
			name: "p2",
			message: "Qual a sua idade? ",
		},
		{
			name: "p3",
			message: "Qual a primeira nota? ",
		},
		{
			name: "p4",
			message: "Qual a segunda nota? ",
		},
	])
	.then((answers) => {
		console.log(answers.p1); // acessar os valores das respostas
		const media = parseInt(answers.p3) + parseInt(answers.p4) / 2;
		console.log(`
    ${answers.p1} tirou ${answers.p3} na primeira nota e ${answers.p4} na segunda nota
    sua media foi ${media}`);
	})
	.catch((error) => {
		console.log(error);
	});
