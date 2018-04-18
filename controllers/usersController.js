const express = require('express');
const User = require('../models/user');


function index(request, response, next){
  User.paginate({},{page:1, limit: 3}, (err, docs)=>{
    console.log(docs);
    //Mandar al usuario una respuesta
    response.json(docs);
  });
}

function create(req, response, next){
  const name = req.body.name;
  const lastName = req.body.lastName;
  const email = req.body.email;


  let user = new User();
  user.name = name;
  user.lastName = lastName;
  user.email = email;

  user.save((err, obj)=>{

    if(err){
      response.json({
        error: true,
        message: 'Usuario No Guardado',
        obj: err
      })
    }else{
      response.json({
        error: false,
        message: 'Usuario Guardada',
        obj: obj
      })
    }

  });
}

function update(request, response, next){

}

function remove(request, response, next){
  const id = request.params.id;
  if(id){
    User.remove({_id: (id)}, (err)=>{
      if(err){
        response.json({
          error: false,
          message: 'Usuario No Eliminado',
          obj: {}
        })
      }else{
        response.json({
          error: false,
          message: 'Usuario Eliminado',
          obj: {}
        })
      }
    });
  }else{
    response.json({
      error: false,
      message: 'Usuario No eliminado',
      obj: {}
    })
  }
}

module.exports = {
  index,
  create,
  update,
  remove
}
