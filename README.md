
# PB_24E1_5

> [!NOTE]
> Projeto de Bloco: Desenvolvimento Front-end com Frameworks

## ✨ Descrição

O projeto escolhido pelo professor é um fórum gamificado.

Nesta plataforma o usuário poderá postar e responder tópicos, recebendo pontos e recompensas por sua participação.

## 🎯 Objetivos

O objetivo é desenvolver uma plataforma que permita que
seus usuários criem e participem em tópicos de interesse.

É importante:

- Permitir o registro de novos usuários com dados pessoais.

- Oferecer acesso à plataforma para usuários cadastrados.

- Permitir que usuários não cadastrados visualizem tópicos populares.

- Criar tópicos com informações relevantes.

- Comentar em tópicos existentes.

- Curtir ou descurtir tópicos e comentários.

- Atribuir pontos a cada ação do usuário.

- Implementar um sistema de ranking para mostrar os usuários com mais pontos.

## 🚀 Como usar

> [!IMPORTANT]
> Este projeto utiliza [Supabase](https://supabase.com).
> 
> É necessário criar uma conta e iniciar um projeto (gratuito) para utlilizar o banco de dados e o serviço de autenticação.
> 
> Também é possível utilizar localmente ou em seu servidor fazendo [self-hosting](https://supabase.com/docs/guides/self-hosting)
> 
> Siga as intruções no [site](https://supabase.com/docs/guides/getting-started).

Você pode rodar o projeto **localmente** ou com **Docker**.

> [!TIP]
> É recomendado rodar o projeto com **Docker** para evitar problemas com dependências e configurações locais.

### Rodando com Docker

Para rodar o projeto com **Docker**, você precisará ter instalado:

- [Docker](https://www.docker.com/)

1. #### Clone este repositório

    ```bash
     git clone https://github.com/xnatsuk/PB_24E1_5.git
     ```

2. #### Acesse a pasta do projeto

    ```bash
    cd PB_24E1_5
    ```
   
3. #### Defina suas variáveis de ambiente

   Crie seu próprio arquivo `.env` com suas keys do Supabase. Veja o `.env.example`

4. #### Execute o comando para subir o container

    ```bash
    docker-compose up -d
    ```

4. #### Acesse o projeto
    client: http://localhost:3000
    
    api docs: http://localhost:5000/docs

### Rodando localmente

Para rodar o projeto **localmente**, você precisará ter instalado:

- [Node.js](https://nodejs.org/en/)

- [pnpm](https://pnpm.io/)

- [Python 3.10](https://www.python.org/downloads/)

- [Poetry](https://python-poetry.org/)

1. #### Clone este repositório

   ```bash
   git clone https://github.com/xnatsuk/PB_24E1_5.git
   ```

2. #### Acesse a pasta do projeto

   ```bash
   cd PB_24E1_5
   ```

3. #### Instale as dependências e inicie o client

   ```bash
   cd client
   pnpm install
   pnpm dev
   ```

4. #### Instale as dependências

   ```bash
   cd ..
   cd backend
   poetry install --no-root
   ```

5. #### Inicie a API

   Para desenvolvimento:
   
   ```
   poetry run fastapi dev src/main.py --port 5000
   ```
   Para produção:
   
   ```
   poetry run fastapi run src/main.py --port 5000
   ```

6. #### Acesse o projeto

   client: http://localhost:3000
   
   api docs: http://localhost:5000/docs
