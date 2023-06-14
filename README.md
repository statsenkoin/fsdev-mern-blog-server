# fsdev-mern-blog-server

1. Init server, connect to MongoDB using mongoose

- init package.json
- add .gitignore, .env
- install packages: express, mongoose, dotenv, cors, morgan, nodemon-D
- init server
- connect to MongoDB

2. Create base routes

- base routes: auth/users, posts
- controllers: users, posts

3. Registeration/Login

- install packages: joi, bcrypt, jsonwebtoken
- mongoose model, joi validation
- auth requests: register, login, logout (checkAuth), current (checkAuth)

4. Refactoring

- create config folder (server config (DB connection, logger), constants)
- create services (models, schemas)
- add server handle errors middlewares
