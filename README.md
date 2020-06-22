
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

### Aqui esta o link para outros comandos do [localstack](https://lobster1234.github.io/2017/04/05/working-with-localstack-command-line/)