import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer
	.prompt([
		{
			name: "nome",  
			message: "Qual o seu nome? ",
		},
		{
			name: "idade",
			message: "Qual a sua idade? ",
		},
		
	])
	.then((answers) => {

        if (!answers.nome || !answers.idade) {
            throw new Error(chalk.bgRed.white('Não é permitido deixar os campos vazios!!'))

        }
		console.log(chalk.bgYellow.black(`O nome é ${answers.nome}, e sua idade é ${answers.idade}.`));
	})
	.catch((error) => {
		console.log(error);
	});
