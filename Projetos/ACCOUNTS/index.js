// modulos externos
import chalk from "chalk";
import inquirer from "inquirer";

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
      if (action == "Criar Conta") {
        createAccount();
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
      console.log(chalk.green(`Conta ${accountName} Criada com Sucesso!!`));
      operation();
    })
    .catch((err) => {
      console.log(err);
    });
}
