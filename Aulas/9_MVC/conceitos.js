/*
* MVC - Model View Controller
É umpadrão de arquitetura de software, que pode deixar aplicações mais organizadas
É dividida em camadas, cada uma com sua responsabilidade
Teremos uma nova estrutura de pastas e arquivos
Facilitando na manutenção

? Model
    Responsável por interagir com o banco de dados
    Normalmente interage com os arquivos do Controller
    Responsável por resgatar, atualizar, remover e criar dados
    É comum que cada tabela seja um Model, assim como fazemos com o setup do Sequelize
    Os Models são quem controlam a arquitetura do sistema, 
tornando facil entender as regras de negocio analisando eles.

? View
    É onde  apresentamos os dados que estão no banco
    Geralmente a view interage com o Controller, que é o meio de campo
    E também nas views temos a interação com o usuário, como formulários para
inserir dados no sistema
    É correto não haver logica/regra de negocios na view, 
ou o mínimo possível
    Normalmente a exibição é feita através do HTML

? Controller
    É onde temos a interação entre Model e View
    Podemos definir qual view será impressa, processar dados que foram 
enviados para o banco ou para a view
    Os Controllers terão um codigo parecido com os das rotas, que estamos
criando

? Estrutura MVC
    controllers  - pasta que ficam os arquivos de Controller
    models      - parts que ficam os arquivos de Model
    views       - pasta que ficam os arquivos de View
    routes      - pasta que ficam os arquivos de rotas
    index.js    - arquivo que inicializa a aplicação


? Arquivo Model
● Vamos criar nosso Model dentro da pasta models;
● Precisamos também sincronizar para criar a tabela, então vamos 
  importar no index.js;
● Este é o primeiro passo do nosso MVC, declarando uma entidade que 
  faz parte da regra de negócios;
● Vamos ver na prática!

? Arquivo Controller
● Vamos agora criar nosso Controller, que ficará dentro da pasta 
  controllers;
● Será uma classe que contém as funções com a lógica de cada rota;
● Algumas só encaminharão as views, outras vão processar dados e passar 
para os Models;
● Por isso vamos importar o Model que o controller utiliza;
● Vamos ver na prática!

? Arquivo View
● Agora que as ligações foram feitas, podemos criar views;
● Vamos adicionar sempre uma função no controller, que retorna a view;
● E também linkar esta função com alguma rota, em routes;
● Assim nós estaremos aplicando o fluxo MVC;
● Vamos ver na prática!
*/