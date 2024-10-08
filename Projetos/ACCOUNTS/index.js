// modulos externos
import chalk from "chalk";
import inquirer from "inquirer";
//! Parou na aula 79 aos 3min
// modulos internos
import fs from "fs";
// operações que o usuario ira realizar
// invocamos a função assim que o sistema e iniciado
console.log(chalk.blue("Iniciamos o ACCOUNTS"));
operation();
function operation() {
	inquirer
		.prompt([
			// configuração do que ira aparecer no prompt
			{
				type: "list", // tipo de prompt
				name: `action`,
				message: "O que deseja fazer?",
				choices: [
					"Criar Conta",
					"Consultar Saldo",
					"Depositar",
					"Sacar",
					"Sair",
				],
			},
		])
		.then((answer) => {
			// console.log(answer)
			// aqui verifica qual ação foi escolhida
			const action = answer["action"];
			// criação das açoes que irao ser executadas
			if (action == "Criar Conta") {
				createAccount();
			} else if (action === "Depositar") {
				deposit();
			} else if (action === "Consultar Saldo") {
				getAccountBalance();
			} else if (action === "Sacar") {
				widthdraw();
			} else if (action === "Sair") {
				console.log(chalk.bgRed.black("Obrigado por usar o Accounts!"));
				process.exit(); // process.exit() encerra o programa
			}
			//   console.log(action)
		})
		.catch((err) => {
			console.log(err);
		});
}

// create an account
function createAccount() {
	console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
	console.log(chalk.green("Defina as opções da sua conta a seguir."));
	buildAccount();
}

function buildAccount() {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Digite um nome para a sua conta:",
			},
		])
		.then((answer) => {
			const accountName = answer["accountName"];
			//   console.info(
			//     chalk.bgBlue.white(`Conta ${accountName}, 'Criada com sucesso!'`)
			//   );

			// verificando se existe diretorio
			if (!fs.existsSync("accounts")) {
				// verifica diretorio
				fs.mkdirSync("accounts"); // cria diretorio caso nao exista
			}

			// verifica se exste conta
			if (fs.existsSync(`accounts/${accountName}.json`)) {
				console.log(
					chalk.bgRed.black(
						`A conta ${accountName} já existe. escolha outro nome!`
					)
				);
				// chama a função novamente para digitar um novo nome
				buildAccount();
				// sempre que tiver um erro da um return para nao executar o codigo abaixo
				return;
			}

			fs.writeFileSync(
				`accounts/${accountName}.json`,
				'{"balance": 0}',
				function (err) {
					console.log(err);
				}
			);
			console.log(
				chalk.green(`Conta ${accountName} Criada com Sucesso!!`)
			);
			operation();
		})
		.catch((err) => {
			console.log(err);
		});
}

// add an amount to user account
function deposit() {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Qual o nome da sua conta?",
			},
		])
		.then((answer) => {
			const accountName = answer["accountName"];

			// verify if account exists
			if (!checkAccounts(accountName)) {
				return deposit();
			}

			// adição de saldo
			inquirer
				.prompt([
					{
						name: "amount",
						message: "Quanto você deseja depositar?",
					},
				])
				.then((answer) => {
					const amount = answer["amount"];

					// add amount
					addAmount(accountName, amount);
					operation();
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((err) => {
			console.log(err);
		});
}

function checkAccounts(accountName) {
	// verifica se a conta existe
	if (!fs.existsSync(`accounts/${accountName}.json`)) {
		console.log(
			chalk.bgRed.black(
				"Esta conta não existe, verifique o nome digitado"
			)
		);
		return false;
	}
	return true;
}

function addAmount(accountName, amount) {
	const accountData = getAccount(accountName);
	// console.log(accountData, "balance addAmount");

	if (!amount) {
		console.log(
			chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!")
		);
		return;
	}

	accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

	// adicionando os dados no arquivo
	fs.writeFileSync(
		`accounts/${accountName}.json`,
		JSON.stringify(accountData),
		function (err) {
			// callback para pegar algum erro
			console.log(err);
		}
	);

	console.log(
		chalk.green(
			`Foi depositado o valor de ${amount} realizado com sucesso!`
		)
	);
}

function getAccount(accountName) {
	const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
		encoding: "utf8",
		flag: "r", // essa flag significa que sera somente leitura
	});

	return JSON.parse(accountJSON);
}

// show account balance
function getAccountBalance() {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Qual o nome da sua conta?",
			},
		])
		.then((answer) => {
			const accountName = answer["accountName"];

			// verify if account exists
			if (!checkAccounts(accountName)) {
				return getAccountBalance();
			}

			const accountData = getAccount(accountName);
			console.log(
				chalk.bgBlue.black(`Seu Saldo é de R$ ${accountData.balance}`)
			);
			operation();
		})
		.catch((err) => console.log(err));
}

// widthdraw an amount
function widthdraw() {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Qual o nome da sua conta?",
			},
		])
		.then((answer) => {
			const accountName = answer["accountName"];
			// verify if account exists
			if (!checkAccounts(accountName)) {
				return widthdraw();
			}

			inquirer
				.prompt([
					{
						name: "amount",
						message: "Quanto você deseja sacar?",
					},
				])
				.then((answer) => {
					const amount = answer["amount"];

					removeAmount(accountName, amount);

					// // verifica se tem saldo
					// const accountData = getAccount(accountName);
					// if (accountData.balance === 0) {
					// 	console.log(
					// 		chalk.bgRed.black(
					// 			"Você não tem saldo suficiente para realizar esta operação!"
					// 		)
					// 	);
					// 	return operation();
					// }
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => {
			console.log(err);
		});
}

function removeAmount(accountName, amount) {
	const accountData = getAccount(accountName);

	// verificar se existe valor no amount
	if (!amount) {
		console.log(
			chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!")
		);
		return widthdraw();
	}

	if (accountData.balance < amount || accountData.balance === 0) {
		console.log(chalk.bgRed.black("Valor indisponivél!"));
		return widthdraw();
	}

	accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);
	// adicionando os dados no arquivo
	fs.writeFileSync(
		`accounts/${accountName}.json`,
		JSON.stringify(accountData),
		function (err) {
			// callback para pegar algum erro
			console.log(err);
		}
	);

	console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
	operation();
}
