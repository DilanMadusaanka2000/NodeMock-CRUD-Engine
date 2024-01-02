import express from 'express';

//const express = require('express'); these two are equivalent

import bodyParser from 'body-parser';
import usersRouter from './routes/user.js';


const app = express();
const PORT = 5000;  //not change 

app.use(bodyParser.json());  //using json data whole application

app.use('/users',usersRouter);

app.get('/', (req , res) => res.send('this is home page'));    //first parameter path expect req



//app.listen(PORT, () => console.log('server runing on port: http://localhost${PORT}'));
app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));

