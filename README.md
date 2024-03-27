# Frontend da Aplicação de Gerenciamento de Usuários

#### Este é o frontend de uma aplicação de gerenciamento de usuários que se integra com a API CRUD de Usuários fornecida pelo backend Java.


O projeto API CRUD backend · [@api-crud-user](https://github.com/wesleywerikis/api-crud-user).

## Funcionalidades

#### O frontend oferece as seguintes funcionalidades:

    · Listar todos os usuários: Exibe uma lista de todos os usuários cadastrados.
    · Detalhes do usuário: Permite visualizar detalhes de um usuário específico.
    · Criar usuário: Permite adicionar um novo usuário ao sistema.
    · Atualizar usuário: Permite atualizar as informações de um usuário existente.
    · Excluir usuário: Permite excluir um usuário existente.

## Estrutura do Projeto

#### O projeto está dividido nas seguintes partes:

    · Componentes React: Contém os componentes React que compõem a interface do usuário.
    · Serviços: Define o serviço UserService para interagir com a API backend.

## Tecnologias Utilizadas

    · React
    · Axios

## Como Executar

1. Clone este repositório.
2. Certifique-se de ter o Node.js e o npm instalados.
3. Navegue até o diretório raiz do projeto.
4. Instale as dependências com o comando `npm install`.
5. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.
6. Acesse a aplicação no navegador através do endereço http://localhost:3000.

## Componentes Principais

#### `App.js`
##### O componente principal `App.js` é responsável por renderizar a aplicação e incluir o componente `UserList`.

#### `UserList.js`
##### O componente `UserList.js` é responsável por exibir a lista de usuários recuperados da API backend.

## Serviços

#### `UserService.js`
##### O serviço `UserService.js` encapsula as chamadas de API para interagir com a API backend. Ele fornece métodos para buscar todos os usuários, buscar um usuário por ID, criar um novo usuário, atualizar um usuário existente e excluir um usuário.
