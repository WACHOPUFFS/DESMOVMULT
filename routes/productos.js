var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion.ejs");

// GET productos page
router.get('/', function(req, res, next) {
    db.query("SELECT * FROM TbProductos", function (err, resultado){
        if (err) {
            console.log(err);
        } else {
            console.log(resultado);
            res.render('productos', { title: 'Productos', Libros: resultado });
        }
    });
});

// Eliminar un producto
router.get('/eliminar/:id', function(req, res, next) {
    const id = req.params.id;
    db.query('DELETE FROM TbProductos WHERE id = ?', [id], (err, resultado) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Se ha eliminado correctamente');
            res.redirect('/productos');
        }
    });
});

module.exports = router;
