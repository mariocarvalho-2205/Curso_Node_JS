/*
* NPM = É o gerenciador de pacotes do NOdeJs
* NPM = Node Package Manage
* é possivel configurar projetos e rodar scripts por meio do npm
* a criação de um projeto gere sempre um arquivo chamado package.json

** comando init - inicia um projeto

dependencias de desenvolvedor
utilizamos a flag --save-dev

atualizando pacotes npm update
para atualização especifica usamos o 
* npm update <pacote>

criação de script
np arquivo package.json criamos a chave na sessao script 
"scripts": {
"start": "programa_que_ira_rodar nome_do_arquivo"
"test": "echo \"Error: no test specified\" && exit 1"
}
* npm run <nome_do_script>
! somente o start que roda sem a utilização do run
Ex: npm start e npm run dev ou npm run server

// instalação de pacote global
* npm install -g <pacote>
! dependendo do pacote e necessario fazer um link para termos acesso aos arquivos dele
* npm link <pacote>
// Alguns pacotes são scripts executáveis, que resultam em alguma ação 
// no nosso computador;
* Como por exemplo a instalação do React, que é feita pelo npx
Ex: npx cowsay "text"

// Para remover um pacote utilizamos o comando: 
* npm uninstall <pacote>
*/