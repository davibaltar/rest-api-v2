# rest-api-v2
A REST API developed using the Express.js framework. The API contains: Communication via HTTP and HTTPS, communication with the MySQL database using ORM Sequelize, JWT authentication + SHA-256, documentation with Swagger, endpoints management and metrics with Swagger-stats, files to the Docker, CORS control, route control, testing endpoints using Jest, a simple CRUD, among others.

| Project Info |
|--------------|
| **Name:** REST API v2 |
| **Developer:** Davi D. Baltar |
| **Compatibility:** Windows Server and Linux Server |
| **Documentation:** [http://localhost:8088/doc](http://localhost:8088/doc) |
| **API metrics and statistics:** [http://localhost:8088/swagger-stats/ui](http://localhost:8088/swagger-stats/ui) |
| **Ports:** 8088 (HTTP) and 8089 (HTTPS) |


## RSA key generator
[https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator](https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator)

## Commands

Create Migrations:
```
npx sequelize migration:create --name=file_name
```

Execute Migrations:
```
npx sequelize db:migrate
```
