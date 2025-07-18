### Sistema de Cadastro de Endereços

Este projeto é uma aplicação web simples para cadastro, visualização e gerenciamento de endereços. O sistema permite que o usuário registre novos endereços, visualize uma lista dos endereços cadastrados, edite e exclua registros existentes. Também oferece suporte a internacionalização (Português e Inglês) e é totalmente responsivo.


### Instalação

2. Inicialização Front end:
    ```bash
    npm install
    npm run dev
    ```

### Funcionalidades

- Listagem dos endereços cadastrados com paginação.

- Cadastro de novos endereços via formulário com validação.

- Edição e exclusão de endereços existentes.

- Visualização detalhada de cada endereço.

- Busca simples para filtrar endereços.

- Internacionalização com suporte a Português e Inglês.

- Layout responsivo para diferentes dispositivos.


### Tecnologias Utilizadas

- Vue 3 — Framework JavaScript para construção da interface.

- Vuetify — Biblioteca de componentes UI baseada em Material Design.

- Pinia — Gerenciamento de estado global da aplicação.

- TypeScript — Tipagem estática para maior segurança e produtividade no desenvolvimento.

- Vue I18n — Suporte a internacionalização e tradução da interface.


### Estrutura do Projeto

components/ — Componentes Vue reutilizáveis, como formulário, tabela, modais.

composables/ — Funções reutilizáveis com Composition API para lógica de negócio.

layouts/ — Layouts padrões de telas do sistema.

pages/ — Telas principais da aplicação (Home, Cadastro, etc).

plugins/ — Plugins setados no sistema (Pinia, i18n, etc).

router/ — Localização das rotas do sistema.

stores/ — Stores Pinia para gerenciamento de estado.

translate/ — Arquivos de tradução para diferentes idiomas.

types/ — Arquivos de tipagem do sistema.

utils/ — Funções utilitárias, como formatação de datas e CEP.


### Internacionalização

A aplicação possui suporte a Português (padrão) e Inglês. Você pode alterar o idioma no seletor localizado no cabeçalho da aplicação.
