# Library API

A simple RESTful Library API built with Node.js and TypeScript.
The API allows users to manage authors and books, including retrieving books written by a specific author.

---

## Features

Create, read, update and delete Authors

Create, read, update and delete Books

Get all books written by a specific author

Error handling middleware

Request validation middleware

Logger middleware

---

## Technologies Used

Node.js

Express.js

TypeScript

REST API

---

## Project Structure

LIBRARY-API
│
├── src
│   ├── middleware
│   │   ├── errorHandler.ts
│   │   ├── logger.ts
│   │   └── validateInput.ts
│   │
│   ├── routes
│   │   ├── authors.ts
│   │   └── books.ts
│   │
│   ├── utils
│   │   └── HttpError.ts
│   │
│   ├── index.ts
│   └── models.ts
│
├── package.json
├── tsconfig.json
└── README.md

---

## Installation

### Clone the repository
git clone https://github.com/your-username/library-api.git

### Navigate into the project
cd library-api

### Install dependencies
npm install

### Run the project
npm run dev

The server should run on:

http://localhost:3000


## Endpoints:
Use the following endpoints to test APIs:

### Authors

POST    /authors <!-- ONLY THE name OF THE AUTHOR IS REQUIRED -->
GET     /authors
GET     /authors/:id
PUT     /authors/:id
DELETE  /authors/:id
GET     /authors/:id/books

---

### Books

POST    /books <!-- title, authorId, year, isbn OF THE BOOK IS REQUIRED -->
GET     /books
GET     /books/:id
PUT     /books/:id
DELETE  /books/:id

---

## Screenshots

### Create Author
![Create Author](./screenshots/create-author.png)

### Get Authors
![Get Authors](./screenshots/get-authors.png)

### Create Book
![Create Book](./screenshots/create-book.png)

### Get Book
![Get Book](./screenshots/get-book.png)