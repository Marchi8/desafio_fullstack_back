Sobre o projeto:
===========================

Esta API faz parte de um projeto full stack que consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.

Front-End: https://github.com/Marchi8/desafio_fullstack_front

Ferramentas utilizadas
---------------

1. Node
2. TypeScript
3. Express.js
4. TypeORM
5. PostgreSQL
6. bcrypt
7. pg
8. UUID
9. Dotenv
10. JSON Web Token
---------------
Como utilizar a aplicação localmente:
===========================

Obs: é necessário criar um banco de dados PostgreSQL para testar a API.

1. Faça o clone do repositório;
```shell
git clone url 
```

2. Instale as dependências necessárias:
```shell
yarn 
```

3. Crie um arquivo .env na raíz do projeto com os mesmos campos do .env.example e forneça as credenciais para acesso ao seu banco de dados PostgreSQL:
```shell
DB_USER=postgres_user
DB_PASSWORD=database_password
DB_HOST=5432
DB=database_name
SECRET_KEY=jsonwebtoken_secret
PORT=3000
PGPORT=5433
```

4. Crie as migrações, gere as migrações e rode as migrações:
```shell
 yarn typeorm migration:create -d src/data-source.ts

 yarn typeorm migration:generate -d src/data-source.ts
 
 yarn typeorm migration:run -d src/data-source.ts
```

5. Inicie a API:
```shell
yarn dev
```
---------------

Rotas:
===========================

- Todas as rotas são protegidas por autenticação, é necessário fazer o login e utilizar o seu Token no Header das requisições de qualquer rota.

`GET /qualquer rota -  Response STATUS 401 Unauthorized`

```JSON
{
	"message": "Missing Authorization Token."
}
```

#
<h2 align ='center'> Login </h2>

#
<h3>Rota Login:</h3>

`POST /login - Request.body JSON`

```JSON
{
	"email": "usuario@email.com",
	"password": "123456"
}
```

`POST /login -  Response STATUS 200 OK`

```JSON
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNmJlZDEyLTMyOWEtNGUxMC05YmRhLTk2ODU5Nzg4MWYxZSIsImlzQWRtIjp0cnVlLCJpYXQiOjE2NzYwNzU5MzQsImV4cCI6MTY3NjE2MjMzNH0.6Tq8dlao_ltxMxw20FGQTjWdrxjrOyE9Y58GADbIu5Y",
	"user": {
		"id": "5ce88371-c29a-489a-a4fe-977481747a32",
	    "name": "usuario",
	    "email": "usuario@email.com",
        "password": "$2b$10$2r5Hw3b1keYtqhhri5fCX.AiLmmjVB9SBpyVm1nzPaJd4HN8.fNpq",
	    "phone": "4002-8922",
	    "isAdm": true,
	    "isActive": true,
	    "createdAt": "2023-02-11T22:28:17.151Z",
	    "updatedAt": "2023-02-11T22:28:17.156Z",
		"friends": [
            {
				"id": "9b4561cf-4751-4749-a056-4b6b4ea713a3",
				"name": "usuario2",
				"email": "usuario2@mail.com",
				"phone": "4002-8922",
				"userId": "416bed12-329a-4e10-9bda-968597881f1e",
				"friendId": "5ce88371-c29a-489a-a4fe-977481747a32",
				"createdAt": "2023-02-10T20:56:06.839Z",
				"updatedAt": "2023-02-10T20:56:06.839Z"
			},
        ]
    }
}
```
#

<h2 align ='center'> Usuário </h2>

#
<h3>Rota Post:</h3>

`POST /users/ - Request.body JSON`

```JSON
{
	"name": "usuario",
	"email": "usuario@email.com",
	"phone": "4002-8922",
	"password": "123456",
	"isAdm": true
}
```

`POST /users/ -  Response STATUS 201 Created`

```JSON
{
	"id": "5ce88371-c29a-489a-a4fe-977481747a32",
	"name": "usuario",
	"email": "usuario@email.com",
	"phone": "4002-8922",
	"isAdm": true,
	"isActive": true,
	"createdAt": "2023-02-11T22:28:17.151Z",
	"updatedAt": "2023-02-11T22:28:17.156Z"
}
```
#

<h3>Rota Patch:</h3>

`PATCH /users/:id - Request.body JSON`

```JSON
{
	
	"email": "usuarioPATCH@email.com",
	"phone": "4002-8920"
}
```

`PATCH /users/:id -  Response STATUS 200 OK`

```JSON
{
	"message": "Usuário atualizado"
}
```
#

<h3>Rota Delete:</h3>

`DELETE /users/:id - Request.body JSON`

```JSON

// NO BODY

```

`DELETE /users/:id -  Response STATUS 204 No Content`

```JSON
No body Returned for response
```
#

<h3>Rota listar todos os usuários:</h3>

`GET /users/ - Request.body JSON`

```JSON

// NO BODY

```

`GET /users/ -  Response STATUS 200 OK`

```JSON
[
   {
		"id": "5ce88371-c29a-489a-a4fe-977481747a32",
	    "name": "usuario",
	    "email": "usuario@email.com",
        "password": "$2b$10$2r5Hw3b1keYtqhhri5fCX.AiLmmjVB9SBpyVm1nzPaJd4HN8.fNpq",
	    "phone": "4002-8922",
	    "isAdm": true,
	    "isActive": true,
	    "createdAt": "2023-02-11T22:28:17.151Z",
	    "updatedAt": "2023-02-11T22:28:17.156Z",
		"friends": [
            {
				"id": "9b4561cf-4751-4749-a056-4b6b4ea713a3",
				"name": "usuario2",
				"email": "usuario2@mail.com",
				"phone": "4002-8922",
				"userId": "416bed12-329a-4e10-9bda-968597881f1e",
				"friendId": "5ce88371-c29a-489a-a4fe-977481747a32",
				"createdAt": "2023-02-10T20:56:06.839Z",
				"updatedAt": "2023-02-10T20:56:06.839Z"
			},
        ]
	},
]
```
#

<h3>Rota listar usuário específico:</h3>

`GET /users/:id - Request.body JSON`

```JSON

// NO BODY

```

`GET /users/:id -  Response STATUS 200 OK`

```JSON
{
		"id": "5ce88371-c29a-489a-a4fe-977481747a32",
	    "name": "usuario",
	    "email": "usuario@email.com",
        "password": "$2b$10$2r5Hw3b1keYtqhhri5fCX.AiLmmjVB9SBpyVm1nzPaJd4HN8.fNpq",
	    "phone": "4002-8922",
	    "isAdm": true,
	    "isActive": true,
	    "createdAt": "2023-02-11T22:28:17.151Z",
	    "updatedAt": "2023-02-11T22:28:17.156Z",
		"friends": [
            {
				"id": "9b4561cf-4751-4749-a056-4b6b4ea713a3",
				"name": "usuario2",
				"email": "usuario2@mail.com",
				"phone": "4002-8922",
				"userId": "416bed12-329a-4e10-9bda-968597881f1e",
				"friendId": "5ce88371-c29a-489a-a4fe-977481747a32",
				"createdAt": "2023-02-10T20:56:06.839Z",
				"updatedAt": "2023-02-10T20:56:06.839Z"
			},
        ]
	}
```
#

<h2 align ='center'> Contatos </h2>

#
<h3>Rota Post:</h3>

`POST /friends - Request.body JSON`

```JSON
{
	"email": "usuario2@mail.com",
	"name": "usuario2",
	"phone": "4002-8920"
}
```

`POST /users/ -  Response STATUS 201 Created`

```JSON
{
	"id": "c657b949-f442-48ee-ab52-b0144e00f74f",
	"name": "usuario2",
	"email": "usuario2@mail.com",
	"phone": "4002-8920",
	"userId": "5ce88371-c29a-489a-a4fe-977481747a32",
	"friendId": "339923dd-3f35-4db9-a823-a2a8ddad1470",
	"createdAt": "2023-02-10T14:08:58.600Z",
	"updatedAt": "2023-02-10T14:08:58.600Z"
}
```
#

<h3>Rota Patch:</h3>

`PATCH /friends/:id - Request.body JSON`

```JSON
{
	"phone": "4002-8925"
}
```

`PATCH /friends/:id -  Response STATUS 200 OK`

```JSON
{
	"message": "Contato Atualizado"
}
```
#

<h3>Rota Delete:</h3>

`DELETE /friends/:id - Request.body JSON`

```JSON

// NO BODY

```

`DELETE /friends/:id -  Response STATUS 204 No Content`

```JSON
No body Returned for response
```
#

<h3>Rota listar todos os contatos:</h3>

`GET /friends - Request.body JSON`

```JSON

// NO BODY

```

`GET /friends -  Response STATUS 200 OK`

```JSON
{
		"id": "5ce88371-c29a-489a-a4fe-977481747a32",
	    "name": "usuario",
	    "email": "usuario@email.com",
        "password": "$2b$10$2r5Hw3b1keYtqhhri5fCX.AiLmmjVB9SBpyVm1nzPaJd4HN8.fNpq",
	    "phone": "4002-8922",
	    "isAdm": true,
	    "isActive": true,
	    "createdAt": "2023-02-11T22:28:17.151Z",
	    "updatedAt": "2023-02-11T22:28:17.156Z",
		"friends": [
            {
				"id": "9b4561cf-4751-4749-a056-4b6b4ea713a3",
				"name": "usuario2",
				"email": "usuario2@mail.com",
				"phone": "4002-8922",
				"userId": "416bed12-329a-4e10-9bda-968597881f1e",
				"friendId": "5ce88371-c29a-489a-a4fe-977481747a32",
				"createdAt": "2023-02-10T20:56:06.839Z",
				"updatedAt": "2023-02-10T20:56:06.839Z"
			},
        ]
	}
```
#