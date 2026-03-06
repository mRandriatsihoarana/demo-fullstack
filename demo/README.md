# Country & City API

Backend API built with **Spring Boot 3** and **Java 21**.

This API allows a frontend application to: - Display a list of
countries - Display cities based on the selected country - Show details
of a selected city - Use pagination (5 cities per page)

------------------------------------------------------------------------

# Requirements

Make sure the following tools are installed:

-   Java 21
-   Maven 3+
-   MySQL 8+

------------------------------------------------------------------------

# Database Setup (MySQL)

Create a MySQL database before running the application.

``` sql
CREATE DATABASE demo_db;
```

------------------------------------------------------------------------

# Configure Database Connection

Update the file:

    src/main/resources/application.yml

Example configuration:

``` yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/demo_db
    username: root
    password: your_password
    driver-class-name: com.mysql.cj.jdbc.Driver

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

------------------------------------------------------------------------

# Insert Initial Data

Insert sample data into the database.

``` sql
INSERT INTO countries (id, name, code) VALUES (1, 'France', 'FR');
INSERT INTO countries (id, name, code) VALUES (2, 'Germany', 'DE');

INSERT INTO cities (name, zip_code, population, description, country_id)
VALUES ('Paris', '75000', 2100000, 'Capital of France', 1);

INSERT INTO cities (name, zip_code, population, description, country_id)
VALUES ('Lyon', '69000', 530000, 'City in France', 1);

INSERT INTO cities (name, zip_code, population, description, country_id)
VALUES ('Berlin', '10115', 3600000, 'Capital of Germany', 2);
```

You can insert more cities to test pagination.

------------------------------------------------------------------------

# Run the Application

From the project root directory:

``` bash
mvn spring-boot:run
```

The API will start on:

    http://localhost:8080

------------------------------------------------------------------------

# API Endpoints

## Get all countries

    GET /api/countries

Example response:

``` json
[
  {
    "id": 1,
    "name": "France",
    "code": "FR"
  }
]
```

------------------------------------------------------------------------

## Get cities by country (paginated)

    GET /api/countries/{countryId}/cities?page=0&size=5

Example:

    GET /api/countries/1/cities?page=0&size=5

------------------------------------------------------------------------

## Get city details

    GET /api/cities/{cityId}

Example:

    GET /api/cities/1

------------------------------------------------------------------------

# Pagination

Cities are returned with pagination.

Default:

    5 cities per page

Example response:

``` json
{
  "content": [
    { "id": 1, "name": "Paris" },
    { "id": 2, "name": "Lyon" }
  ],
  "page": 0,
  "size": 5,
  "totalElements": 10,
  "totalPages": 2
}
```

------------------------------------------------------------------------

# Frontend Integration

CORS is enabled for:

    http://localhost:5173

This allows communication with a frontend running on **Vite / React /
Vue** during development.

------------------------------------------------------------------------

# Project Structure

    src
     ├── controller
     ├── service
     ├── repository
     ├── entity
     ├── dto
     └── config

------------------------------------------------------------------------

# Author

Spring Boot Backend Demo
