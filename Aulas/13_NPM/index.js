/*
// npm config
* Configurando o autor e o email
** npm config set init-author-name NOme
** npm config set init-author-email Email@gmail.com
** npm config set init-author-url http://meusite.com

* exibindo configurações do npm
** npm get

* apagando configuração
** npm config delete init-author-name
** npm config delete author
** npm config delete keyset

* instalando modulo global
** npm --global install ou a flag -g

* removendo modulos globais
** npm remove modulo -g ou --global

* listando modulos instalados
** npm list mostra os modulos instalados no projeto
** npm list --depth=0 mostra os modulos principais instalados do projeto
** npm list --depth=0 -g mostra os modulos principais instalados global
** npm list -g mostra os modulos instalados global
** npm ls / com alias

* removendo os pacotes de forma automatica
** npm prune  - faz uma faxina das dependencias nao usadas no projeto 

* procurando modulo pelo terminal
** npm search nome da lib

* npm outdated - verifica quais dependencias estão atualizadas ou nao

* Verificando e limpando o cache
** npm cache verify - verifica o cache
** npm cache clean --force -- força a limpeza do cache

* Detectando falha de segurança no modulo vulnerabilidade
** npm audit - retorna os alertas
* Corrigindo a vulnerabilidade do modulo
** npm audit fix -- caso de alguma que ele nao resolva
** utilizamos o 
** npm audit fix --force //! Não Recomendado

* Pacotes npm View - visualiza dados do pacote

* Acessando a documentação do pacote
** npm docs pacote - direciona para a pagina do pacote

* Home page do pacote
** npm home pacote

* Reduzindo duplicação do pacote
** npm dedupe ou npm ddpd

* intalando pacotes sem salvar nas dependencias
** npm install axios --no-save

* verificando scripts do projeto
** npm run

*/