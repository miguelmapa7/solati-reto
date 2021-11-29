/**
  * File: userChatController.js
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

 const User = require('../models/userChat');
 //const jwt = require('jsonwebtoken');
 
 class UserChatController {
 
     register(req, res) {
         let objUser = req.body;
         if (objUser.numberIn && objUser.numberOut ) {
             //Guardar usuario en la BD
             User.create(objUser, (error, doc) => {
                 if (error) {
                     res.status(500).json({ info: error });
                 } else {
                     //console.log(doc);
                     //let token = jwt.sign({ id: doc._id }, process.env.JWT_PRIVATE_KEY);
                     res.status(201).json({ info: "Chat Registered" });
                 }
             });
         } else {
             res.status(400).json({ info: "Incomplete data" });
         }
     }
 
     /*login(req, res) {
         let { email, password } = req.body;
         User.findOne({ email, password }, (error, doc) => {
             if (error) {
                 res.status(500).json({ error });
             } else {
                 if (doc != null && doc != undefined) {
                     let token = jwt.sign({ id: doc._id }, process.env.JWT_PRIVATE_KEY);
                     res.status(200).json({ token });
                 }else{
                     res.status(401).json({info: 'Credenciales inválidas'});
                 }
             }
         });
     }*/
 
 
 }
 
 module.exports = UserChatController;
 