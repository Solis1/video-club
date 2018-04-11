const express = require('express');
const Movie = require('../models/movie');


function index(request, response, next){
  Movie.paginate({},{page:1, limit: 3}, (err, docs)=>{
    console.log(docs);
    //Mandar al usuario una respuesta
    response.json(docs);
  });
}

function create(req, response, next){
  const title = req.body.title;
  const genre = req.body.genre;
  const duration = req.body.duration;
  const director = req.body.director;

  let movie = new Movie();
  movie.title = title;
  movie.genre = genre;
  movie.duration = duration;
  movie.director = director;

  movie.save((err, obj)=>{

    if(err){
      response.json({
        error: false,
        message: 'Pelicula Guardada',
        obj: obj
      })
    }else{
      response.json({
        error: false,
        message: 'Pelicula Guardada',
        obj: obj
      })
    }

  });

  //response.send("Estas en /movies/ -> POST");
}

function update(request, response, next){
  response.send("Estas en /movies/ -> PUT");
}

function remove(request, response, next){

  const id = request.params.id;
  if(id){
    Movie.remove({_id: (id)}, (err)=>{
      if(err){
        response.json({
          error: false,
          message: 'Pelicula No Eliminada',
          obj: {}
        })
      }else{
        response.json({
          error: false,
          message: 'Pelicula Eliminada',
          obj: {}
        })
      }
    });
  }else{
    response.json({
      error: false,
      message: 'Pelicula No eliminadas',
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
