# API REST para Cadastro de Produtos

Este projeto é uma API RESTful desenvolvida como parte de um desafio técnico. A API gerencia o cadastro e a listagem de produtos e é consumida por uma aplicação frontend em React.

## Arquitetura e Princípios SOLID

A API foi construída utilizando **Arquitetura Onion** com múltiplos projetos para garantir uma clara separação de responsabilidades e baixo acoplamento:
* **ProductApi.Domain:** Camada central com as entidades de negócio.
* **ProductApi.Application:** Camada de aplicação com a lógica de negócio, DTOs e interfaces (contratos).
* **ProductApi.Infrastructure:** Camada de infraestrutura, responsável pelo acesso a dados com Entity Framework.
* **ProductApi.Web:** Camada de apresentação, que expõe os endpoints da API.

Foram aplicados os seguintes princípios **SOLID**:
* **Princípio da Responsabilidade Única (SRP):** As classes de Serviço lidam com a lógica de negócio, os Repositórios com o acesso a dados e os Controllers com as requisições HTTP.
* **Princípio da Inversão de Dependência (DIP):** As camadas superiores dependem de abstrações (interfaces) das camadas inferiores, com as implementações concretas sendo resolvidas via Injeção de Dependência.

## Tecnologias Utilizadas

### Backend
* .NET 8
* ASP.NET Core Web API
* Entity Framework Core (com provedor In-Memory)
* Swashbuckle (Swagger) para documentação da API

### Frontend
* React
* Vite (para setup e servidor de desenvolvimento)
* CSS puro para estilização

## Funcionalidades

* **`POST /produto`**: Endpoint para incluir novos produtos (nome, preço, categoria).
* **`GET /produto`**: Endpoint para listar todos os produtos cadastrados.
* **Documentação Interativa:** Interface do Swagger (`/swagger`) para visualizar e testar os endpoints da API.
* **Frontend Simples:** Interface em React para criar e visualizar os produtos em tempo real.

## Como Rodar o Projeto

Este projeto é composto por duas partes: o **backend (API)** e o **frontend (UI)**. Ambos precisam estar rodando simultaneamente em terminais separados.

### Pré-requisitos
* [.NET SDK 6.0](https://dotnet.microsoft.com/download/dotnet/6.0) ou superior.
* [Node.js](https://nodejs.org/) (versão LTS recomendada), que inclui o `npm`.

### 1. Rodando o Backend (API)

1.  Clone o repositório da API:
    ```bash
    git clone https://github.com/HenSilva3/ProductApi-Challenge.git
    cd ProductApi-Challenge
    ```
2.  Navegue até o projeto Web:
    ```bash
    cd src/ProductApi.Web
    ```
3.  Execute a aplicação:
    ```bash
    dotnet run
    ```
4.  A API estará rodando em um endereço como `https://localhost:7XXX`. Você pode testá-la acessando a documentação em `https://localhost:7XXX/swagger`.

    **Observação:** Como estamos usando um banco de dados em memória, não há necessidade de configurar um banco de dados externo. Ele será criado e zerado toda vez que a aplicação for iniciada.

### 2. Rodando o Frontend (React)

1.  Clone o repositório do frontend em uma pasta separada:
    ```bash
    git clone https://github.com/HenSilva3/ProductApi-React-Frontend.git
    cd ProductApi-React-Frontend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  **Configuração Importante:** Abra o arquivo `src/ProductManager.jsx` e ajuste a constante `API_URL` para a porta em que seu backend está rodando.
    ```javascript
    // Exemplo:
    const API_URL = 'https://localhost:7123/produto';
    ```
4.  Execute a aplicação:
    ```bash
    npm run dev
    ```
5.  Acesse a aplicação no seu navegador na URL fornecida (geralmente `http://localhost:5173`).

## Licença
Este projeto está licenciado sob a Licença MIT.