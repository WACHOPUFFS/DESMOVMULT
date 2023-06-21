var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion.ejs");

// GET agregar page

router.get('/', function(req, res, next) {
  
  res.render('agregar', { title: 'agregar'});

  
});



  // Agregar un producto
router.post('/', function(req, res, next){

    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const imagen = req.body.imagen


  db.query('INSERT INTO TbProductos SET ?',{titulo:titulo, descripcion:descripcion, precio:precio, imagen:imagen}, (err, resultado)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Se ha agregado correctamente');
        res.redirect('/productos');
    }
  });
});

 module.exports = router;