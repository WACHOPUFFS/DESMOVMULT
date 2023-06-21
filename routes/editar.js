var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion.ejs");


// GET editar page
router.get('/', function(req, res, next) {
  
    res.render('editar', { title: 'editar'});


});
  
  router.post('/', function(req, res, next) {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const imagen = req.body.imagen;
  
    db.query('UPDATE TbProductos SET titulo = ?, descripcion = ?, precio = ?, imagen = ? WHERE ID = ?', [titulo, descripcion, precio, imagen, id], function (err, resultado)  {
      if (err) {
        console.log(err);
      } else {
        console.log('Se ha actualizado correctamente');
        res.redirect('/productos');
      }
    });
  });


 module.exports = router;