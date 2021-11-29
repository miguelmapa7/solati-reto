/**
  * File: userChatRouter.js
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
 * There is 
 */

const {Router} = require('express');
const UserChatController = require('../controllers/userChatController');

class UserChatRouter{
    constructor(){
        //Crear objeto de tipo Router y asignarlo como atributo de la clase
        this.router = Router();
        //Configurar las rutas
        this.config();
    }

    config(){
        const objUserC = new UserChatController();
        //Crear y configurar endpoints
        this.router.post('/user', objUserC.register);
        //this.router.post('/user/auth', objUserC.login);
    }
}

module.exports = UserChatRouter;
