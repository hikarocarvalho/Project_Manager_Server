if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const connection = require('./models/conn/connection');
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_name = process.env.DB_NAME;

connection(db_url,db_user,db_pass,db_name);

const projects = require('./routers/projects.routes.js');
app.use('/projects',projects);
  
const tasks = require('./routers/tasks.routes.js');
app.use('/tasks',tasks);

const taskspriority = require('./routers/task_priority.routes.js');
app.use('/priority',taskspriority);
  
const users = require('./routers/users.routes.js');
app.use('/users',users);
  
app.listen(process.env.PORT || port, ()=> {
    console.info(`Servidor rodando na porta ${port}`);
})


