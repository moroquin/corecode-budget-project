//const express = require('express');
//can use:
//import express = require('express');
import express  from 'express';
import loginRoutes from './routes/login';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(loginRoutes);


app.listen(3000);