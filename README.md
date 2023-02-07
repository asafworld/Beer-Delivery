# Boas vindas Beer Delivery

Projeto destinado a criação de um site para compra e venda e bebidas, bem como acompanhamento e gerenciamento de sua entrega. Foi realizado em grupo durante o curso de Back-end da Trybe. 

Com: Alvaro Guilherme, Arthur Coelho, Matheus Araujo, Otavio Azevedo e Thiago Maia

---

# Contexto de Desenvolvimento

<details>
  <summary>
    <strong>Proposta desenvolvida pela Trybe</strong>
  </summary><br>

  **Neste projeto, seu grupo deve desenvolver um app de delivery para uma distribuidora de bebidas. Veja abaixo o contexto da entrega que deve ser feita:**


  - Ter acesso via login: Para todos (Clientes, vendedores e administradores), cada um sendo direcionado a sua respectiva tela de usuário. 
  - Fazer a comunicação entre clientes e pessoas vendedoras: Ao que o cliente realiza o pedido, o vendedor aprova a compra e a coloca para a entrega. O comprador por fim, sinaliza quando a entrega for realizada.
  - Pessoas administradores fazem a gestão dos vendedores cadastrados. 
  </details>

# Orientações

<details>
  <summary>
    <strong>Scripts relevantes do <code>package.json</code> principal</strong>
  </summary><br>

  Utilizamos o gerenciador de processos `pm2`.

  **São os scripts da raiz do projeto (`./package.json`) e não das aplicações individuais `./front-end/package.json` e `./back-end/package.json`**:

  **Observação**: Arquivos de configuração foram gerados durante o curso da Trybe e aproveitados pelo grupo no deselvovimento do projeto. Todos os créditos para esses arquivos e comandos são direcionados a Trybe, o resto do desenvolvimento foi feito pelo time de alunos.

  - `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;
    - *uso (na raiz do projeto): `npm start`*

  - `stop`: Para e deleta as aplicações rodando no `pm2`;
    - *uso (na raiz do projeto): `npm stop`*

  - `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);
    - *uso (na raiz do projeto): `npm run dev`*

  - `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);
    - *uso (na raiz do projeto): `npm run dev:prestart`*

  - `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;
    - *uso (na raiz do projeto): `npm run db:reset`*

  - `db:reset:debug`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local. Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);
    - *uso (na raiz do projeto): `npm run db:reset:debug`*
</details>

<details>
  <summary>
    <strong>Banco de dados e Sequelize</strong>
  </summary><br>

  ## Banco de dados

  Utilizamos a ORM `Sequelize`, conectado ao banco de dados `MySQL`.

</details>

<details>
  <summary>
    <strong>Versão NODE necessária</strong>
  </summary><br>

- ⚠️ Versão 16 do `node` deve ser utilizada para a instalação de pacotes. Instale esta versão para evitar problemas de desempenho e funcionamento.
</details>


<details>
  <summary>
    <strong>Estrutura e construção do projeto</strong>
  </summary><br>

  O projeto é composto por três partes, Front e Back-end, e o banco de Dados. Durante o período de construção das duas primeiras partes houve a seguinte ordem de desenvolvimento: 

  - **Acesso comum**: 
    - (1) Tela de Login; 
    - (2) Tela de Registro.

  - **Acesso do Cliente**:
    - (3) Tela de Produtos; 
    - (4) Tela de Checkout; 
    - (5) Tela de Pedidos; 
    - (6) Tela de Detalhes do Pedido.

  - **Acesso da Pessoa Vendedora**: 
    - (7) Tela de Pedidos; 
    - (8) Tela de Detalhes/Controle do Pedido.

  - **Validação do Status do Pedido**: 
    - (9) Teste de status; 

  - **Acesso da Pessoa Administradora**: 
    - (10) Tela de gerenciamento de usuários.

  - **Testes da aplicação**: 
    - (11) Testes de cobertura.

</details>
