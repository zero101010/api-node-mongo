# Monprospecteur api with mongo
## Instalação
- É necessário instalar as dependências dos projetos executando o `npm install`

## Rodar em modo de dev
- Para rodarmos em modo de dev após a instalação tudo que devemos fazer é executar o `npm start`

## Rodar em modo de produção
### Execução com Docker
- Para executar aplicação com o docker, é necessário executar o comando `docker build -t api-mongo .` para executar a build da imagem e após executar o comando `docker run -p 3000:3000 api-mongo`

## Fluxos para facilitar o entendimento:
dev = instalação->Rodar em modo de dev

prod-com docker= instalação->buildar docker-> executar docker
 
 OBS: TOdos os comandos citados no README são executados na raiz do projeto
