# Sample NestServer with Postgre

Tutorial from [medium](https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f)

This is a sample server that can post, get data from databse.

## Prerequisite
[pgadmin4](https://www.pgadmin.org)

[docker](https://www.docker.com)

## Installation
* git clone this project.
* open docker
* open a separate cli
```npm
npm install
npm start:dev:db
npm start:dev
npm run typeorm:migration:run

```

## Usage

To test api, go to [http://127.0.0.1:3000/docs](http://127.0.0.1:3000/docs).

To see the local database, open pgadmin4, connect to the server using
```
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
```

To update a change in entity model,
```npm
npm run typeorm:migration:generate -- my_init
npm run typeorm:migration:run
```

## Unfinished

* Have to accept user, see [https://docs.nestjs.com/techniques/authentication](https://docs.nestjs.com/techniques/authentication)

* Connect to whatever database

* Make it runnable via npm start
