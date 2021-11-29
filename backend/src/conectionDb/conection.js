/**
  * File: conection.js
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
 * There are the controllers for conection to DB
 */

// import library 
const mongoose = require('mongoose');

// import varibles necessary 
const { db_local, db_cloud } = require('./urlDb');

/**
 * Class ConnDb: 
 */
class ConnDb{
    constructor(){
        this.connection();
    }

    async connection(){
        this.conn = await mongoose.connect(db_cloud);
    }
}

module.exports = ConnDb;
