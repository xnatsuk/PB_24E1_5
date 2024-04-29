
# PB_24E1_5

> Projeto de Bloco: Desenvolvimento Front-end com Frameworks

## ⭐️ Descrição

O projeto escolhido pelo professor é um fórum gamificado.

Nesta plataforma o usuário poderá postar e responder tópicos, recebendo pontos e recompensas por sua participação.

## ✨ Objetivos

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

Você pode rodar o projeto **localmente** ou com **Docker**.

> **Observação:** é recomendado rodar o projeto com **Docker** para evitar problemas com dependências e configurações locais.

### Rodando com Docker

Para rodar o projeto com **Docker**, você precisará ter instalado:

- [Docker](https://www.docker.com/)

#### 1. Clone este repositório

```sh
git clone https://github.com/xnatsuk/PB_24E1_5.git
```

#### 2. Acesse a pasta do projeto

```sh
cd PB_24E1_5
```

#### 3. Execute o comando para subir o container

```sh
docker-compose up -d
```

#### 4. Acesse o projeto
client: http://localhost:3000

api: http://localhost:5000

### Rodando localmente

Para rodar o projeto **localmente**, você precisará ter instalado:

- [Node.js](https://nodejs.org/en/)

- [pnpm](https://pnpm.io/)

- [Python 3.10](https://www.python.org/downloads/)

- [Poetry](https://python-poetry.org/)

#### 1. Clone este repositório

```sh
git clone https://github.com/xnatsuk/PB_24E1_5.git
```

#### 2. Acesse a pasta do projeto

```sh
cd PB_24E1_5
```

#### 3. Instale as dependências e inicie o client

```sh
cd client
pnpm install
pnpm dev
```

#### 4. Instale as dependências e inicie a api

```sh
cd ..
cd api
poetry install
poetry run python src/app.py
```

#### 5. Acesse o projeto

client: http://localhost:3000

api: http://localhost:5000
