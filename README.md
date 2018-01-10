# Site Atlas da Agropecuária Brasileira

Este é o repositório do site do Atlas da Agropecuária Brasileira

# Arquitetura do aplicativo

 O aplicativo é desenvolvido na arquitetura de quatro camadas, cliente, servidor de dados e servidor de requisições, servidor de mapas.
 
 ## Cliente (./app/)
 O cliente é desenvolvido em [ReactJS](https://github.com/facebook/react) + [Redux](https://github.com/reactjs/redux), trata-se de um aplicativo de página única (SPA), onde o componente principal é o mapa com seus controles típicos (legenda, seletor de camadas, seta norte, barra de escala). O cliente se comunica diretamente com o servidor de requisições AJAX por meio da biblioteca [Axios](https://www.npmjs.com/package/axios). 
 
 A biblioteca de mapas utilizada é o [Openlayers 3](https://openlayers.org/). As camadas são configuradas dinamicamente por meio de serviços acessados do banco de dados, com os dados do esquema **conf**, disponibilizados por meio de uma função no esquema **exposed**.
 
 ## Servidor de requisições (./backend/)
 O servidor de requisições foi desenvolvido em NodeJS e utiliza como padrão o [GraphQL](graphql.org). A implementação utilizada do GraphQL é o [PostgraphQL](https://github.com/postgraphql/postgraphql). Essa biblioteca indexa automaticamente as tabelas e *views* que estão no esquema **exposed** do banco de dados, bem como as funções que residem nele. 
 
 As funções são acessadas pela palavra chave *mutation*, mesmo podendo se referir a funções que apenas efetuam a leitura dos dados, isso é um padrão da biblioteca. É possível acessar a interface interativa para construir as consultas GraphQL por meio de localhost:\[porta\]/iquery

Existe ainda outro serviço para acessar as notícias e publicações que residem em outro banco de dados MySQL de domínio do setor de comunicação do Imaflora.

## Servidor de dados
O servidor de dados é PostgreSQL e este é responsável pelo tratamento das regras de negócio por meio de funções programadas internamente. O banco de dados regula o nível de acesso às informações que estão disponíveis apenas pelo esquema **exposed**.

## Servidor de mapas
O servidor de mapas utiliza o software Geoserver para servir os mapas via protocolo WMS.

# Requisitos

- NodeJS

# Ambiente de Desenvolvimento

## password.js

Para efetuar a utilização desse método é necessário baixar o repositório no local e criar um arquivo "password.js" na pasta *../backend*:

> ../backend/password.js

## Instalação das dependências

Instale as bibliotecas na pasta da aplicação e na pasta do backend via NPM

```
$ /atlasagropecuario/npm install
```

```
$ /atlasagropecuario/backend/npm install
```

## Iniciar o ambiente de desenvolvimento

Inicie o NPM na pasta */atlasagropecuario*

```
$ /atlasagropecuario/npm start
```

Inicie o NPM na pasta *../backend*

```
$ /atlasagropecuario/backend/npm start
```

Acesse pelo navegador com o endereço local. Ex: http://localhost:8080/
