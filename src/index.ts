import express from 'express'
import 'reflect-metadata'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import {connectionString} from './db'
import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from '@config/inversify.config'


// tslint:disable-next-line: no-var-requires
require('module-alias/register')
import '@config/ioc/loader'



const server =  new InversifyExpressServer(container, null, { rootPath: "/api" });

server.setConfig(expressApp => {
    expressApp.use(bodyParser.json())
    expressApp.use(cors())
  })
  
  const app = server.build()

  const port = process.env.PORT || 4000;
mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true }).then(
    // tslint:disable-next-line: no-console
    () => { console.log('Base de datos conectada') },
    // tslint:disable-next-line: no-console
    err => { console.log(`No se logro conectar a la base de datos ${err}`) }
);

const httpServer = app.listen(port)
  
  exports = module.exports = app

