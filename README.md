
### Subir o localstack
docker-compose up -d localstack

No localhost:8080 vai existir um dash com todos os serviços locais da aws que estiverem disponiveis
ou os que foram incluidos no docker-compose.yml

### link para os comandos localstack
  https://lobster1234.github.io/2017/04/05/working-with-localstack-command-line/

### comando para criar 1 bucket local
  bash scripts/s3/create-bucket.sh local-bucket
