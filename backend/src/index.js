/**
  * File: index.js
  *
  * @version: 0.1
  *
  * Fecha de Creación: 28/11/2021
  *
  * Fecha de Modificación: 
  *
  * @author: miguelmapa7-1102838994
  *
  * Copyright: @autor
  *
  */

/**
 * There are all the codes for start the server
 */

// Import librarys
const express = require('express');
const cors = require('cors');

// Set environment variables
require('dotenv').config();

// Import moduls
const ConnDb = require('./conectionDb/conection');
const UserChatRouter = require('./routers/userChatRouter');

/**
 * Class Server: here are start all the config necessary for the application
 */
class Server {
    constructor() {

        // Start DB Conection
        this.objConn = new ConnDb();

        //Creatingn thr app server
        this.app = express();

        // Set the server
        this.config();
    }

    // Method to config the server
    config() {

        //indicar el procesamiento de datos en formato json durante las peticiones
        this.app.use(express.json());

        //Permitir las conexiones de origen cruzado
        this.app.use(cors());

        //Almacenar el puerto por el que correrà el servidor
        this.app.set('PORT', process.env.PORT || 3000);

        // Creating routers
        const router = express.Router();

        // Process requests with the GET method to the server root
        router.get('/', (req, res) => {
            res.status(200).send();
        });

        // Creating object userChat
        const userR = new UserChatRouter();

        // Add routers to express
        this.app.use(router);
        this.app.use(userR.router);

        // Put the server to listen
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor corriendo por el puerto ==>> ", this.app.get('PORT'));
        });
    }
}

// Creating object Server
new Server();
