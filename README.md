
# Subir o localstack na sua maquina
Requisitos necessarios:
  * Docker

instale as dependencias do projeto:

```
  npm install
```

depois basta rodar o comando docker-compose:

```
  docker-compose up -d localstack
```

O localstack vai disponibilizar um [dashboard](localhost:8080) que lista todos os serviços da aws que estiverem disponiveis para rodar localmente, ou os que foram incluidos no docker-compose.yml na chave ***services:localstack:environment***

# Comandos Basicos para usar localstack aws

### comando para criar 1 bucket local
```
  bash scripts/s3/create-bucket.sh local-bucket
```

### comando para fazer um upload de arquivo no s3 local

```
  bash scripts/s3/upload-file.sh local-bucket path-do-arquivo
```

### Aqui esta o link para outros [comandos do localstack](https://lobster1234.github.io/2017/04/05/working-with-localstack-command-line/)
### O link para o repositorio do [github do plugin serverless localstack](https://github.com/localstack/localstack)

# Testes

Para criar um teste basta criar uma sua função normalmente e fazer referencia no [serverless.yml](./serverless.yml).

exemplo de uma função:

```
functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
```

Feito isso basta rodar o comando createTest passando o nome da função:

```
  npm run createTest hello
```