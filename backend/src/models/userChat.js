/**
  * File: userChat.js
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
 * There is the model de userChat
 */
const {Schema, model} = require('mongoose');

const userChatSchema = Schema({
    numberIn: {
        type: Number
    },
    numberOut: {
        type: Number
    }
}, {
    collection: "usersChat"
});

module.exports = model('UserChat', userChatSchema);
