import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import {connectionString} from './db'
import userRoute from './routes/user.route'



mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true }).then(
    // tslint:disable-next-line: no-console
    () => { console.log('Base de datos conectada') },
    // tslint:disable-next-line: no-console
    err => { console.log('No se logro conectar a la base de datos' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    // tslint:disable-next-line: no-console
    console.log('Escuchando en el puerto ' + port);
});