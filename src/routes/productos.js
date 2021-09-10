const express = require('express');
const conexion = require('../conexion.js').conexion;
const router = express.Router();

router.get('/', async (req, res) => {
    const productos = await conexion.query('SELECT * FROM productos');
    res.render('productos/index' , {productos} );
});

router.post('/add', async (req, res)=>{
    const {codigo, nombre, proveedor} = req.body
    const producto = {
        codigo,
        nombre,
        proveedor
    }
    await conexion.query('INSERT INTO productos SET ? ', [producto]);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res)=>{
    const {id} = req.params
    await conexion.query('DELETE FROM productos WHERE id = ? ', [id]);   
    res.redirect('/');
});

module.exports = {
    router
} 