# Node.js Express MVC Project Template

This is a sample MVC project built on top of the NodeJS, ExpressJS and Mongoose.

## Project Overview

This project includes sample user collection its basic CRUD routes.

## Table of Contents

- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Routes](#routes)
- [Controllers](#controllers)
- [Models](#models)
- [Views](#views)
- [Middleware](#middleware)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js > 14

## Installation

- update .env.development
- `npm i`
- `npm run start`
- Run `localhost:5000` in browser to access routes directly.
- Postman collection is available at [Postman](./postman/MVC%20Template.postman_collection.json)

## Folder Structure

```
.
├── config
│   └── Database configuration
├── controllers
│   └── User controller methods
├── models
│   └── User collection
├── views
│   └── // template files
├── routes.js
├── server.js
└── ...
```