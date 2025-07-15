# Primeiro-Teste-Neo 🚀

## 🔍 Visão Geral
Este projeto utiliza o Cypress para automatizar testes end-to-end. O foco é validar fluxos essenciais como login, cadastro e navegação.

## ⚙️ Setup
1. Pré-requisitos:
- Node.js (>= v14);
- npm ou yarn;
- Navegador compatível (Chrome, Firefox…).

2. Instalação
No terminal, dentro da pasta do projeto, execute:
```bash
npm install
# ou
yarn install
```

Isso irá instalar as dependências, incluindo o Cypress, definidas em package.json.

3. Configuração
Recomenda-se configurar variáveis de ambiente seguras (como URLs e credenciais) no arquivo cypress.env.json:

```json
{
  "baseUrl": "https://seu-ambiente-neobank.com",
  "defaultUser": "usuario@exemplo.com",
  "defaultPassword": "Senha123!"
}
```

## 🧱 Estrutura do Projeto
```bash
.
├── cypress/
│   ├── e2e/               # Testes de fluxo (arquivo .cy.js)
│   ├── fixtures/          # Dados mock (JSON)
│   ├── support/           # Comandos customizados e extensões
│   │   └── commands.js
│   └── videos/            # Vídeos gerados com `cypress run`
├── cypress.config.js      # Configurações gerais do Cypress
├── package.json           # Dependências e scripts do projeto
└── README.md              # Este arquivo
```

## 🧪 Executando os Testes
Modo interativo (UI):
```bash
npx cypress open
# ou
yarn cypress open
```

Isso abrirá a interface inicial do Cypress onde você pode selecionar testes individuais.

Modo headless (linha de comando + vídeos):
```bash
npx cypress run
# ou
yarn cypress run
```

Os testes serão executados em modo headless e vídeos serão salvos em cypress/videos/.


## 📘 Exemplos de Testes
Suporte a comandos customizados
Em cypress/support/commands.js:
```js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/home');
});
```

Exemplo de fluxo de login
Em cypress/e2e/login.cy.js:
```js
describe('Fluxo de Login', () => {
  const user = Cypress.env('defaultUser');
  const pass = Cypress.env('defaultPassword');

  it('Deve logar com credenciais válidas', () => {
    cy.login(user, pass);
    cy.contains('Bem-vindo').should('be.visible');
    cy.get('[data-testid="logout"]').click();
  });
});
```

## 🏗️ Configurações adicionais
Ajustes de timeout
Caso a aplicação demore para carregar, adicione ou altere em cypress.config.js:
```js
module.exports = {
  e2e: {
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
  }
};
```

Habilitar/desabilitar vídeos
Também no cypress.config.js:
```js
video: true, // para gravar vídeos
// video: false, // para desativar gravação
```

## ✅ Contribuindo
Dê um ⭐️ no projeto

- Crie uma branch com sua feature ou correção;
- Abra um Pull Request detalhando as mudanças;
- Participe da revisão!
