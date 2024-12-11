# TaskManager-API

## Descrição
TaskManager-API é uma aplicação de gerenciamento de tarefas construída utilizando Node.js puro. Esta API permite criar, ler, atualizar e deletar tarefas.

## Instalação

1. Clone o repositório:
  ```sh
  git clone <URL_DO_REPOSITORIO>
  ```
2. Navegue até o diretório do projeto:
  ```sh
  cd TaskManager-API
  ```
3. Instale as dependências:
  ```sh
  npm install
  ```

## Uso

### Iniciar o servidor
Para iniciar o servidor, execute o seguinte comando:
```sh
node index.js
```

### Endpoints

#### Criar uma nova tarefa
- **URL:** `/tasks`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Título da tarefa",
    "description": "Descrição da tarefa"
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** `201 Created`
  - **Corpo:**
    ```json
    {
      "id": 1,
      "title": "Título da tarefa",
      "description": "Descrição da tarefa",
      "completed": false
    }
    ```

#### Listar todas as tarefas
- **URL:** `/tasks`
- **Método:** `GET`
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Corpo:**
    ```json
    [
      {
        "id": 1,
        "title": "Título da tarefa",
        "description": "Descrição da tarefa",
        "completed": false
      }
    ]
    ```

#### Atualizar uma tarefa
- **URL:** `/tasks/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Novo título da tarefa",
    "description": "Nova descrição da tarefa",
    "completed": true
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Corpo:**
    ```json
    {
      "id": 1,
      "title": "Novo título da tarefa",
      "description": "Nova descrição da tarefa",
      "completed": true
    }
    ```

#### Deletar uma tarefa
- **URL:** `/tasks/:id`
- **Método:** `DELETE`
- **Resposta de Sucesso:**
  - **Código:** `204 No Content`

## Estrutura do Projeto

```
TaskManager-API/
├── index.js
├── package.json
├── README.md
└── src/
  ├── controllers/
  ├── models/
  └── routes/
```