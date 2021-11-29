/**
  * File: urlDb.js
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
 * There are urls for conectionDb
 */

const database = "db_solati";

module.exports = {
    db_local: `mongodb://localhost:27017/${database}`,
    db_cloud: `mongodb+srv://${process.env.NODE_USER}:${process.env.NODE_PASS}@cluster0.vavd6.mongodb.net/${database}`,
}
