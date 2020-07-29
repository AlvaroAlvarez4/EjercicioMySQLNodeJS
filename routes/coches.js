var express = require('express');
var router = express.Router();
let connection = require('../config/db.js')



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// localhost:3000/coches/deLujo
router.post('/deLujo', function(req, res) {
    let marca = req.body.marca
    let modelo = req.body.modelo
    let color = req.body.color
    let name = req.body.name
    let last_name = req.body.last_name
    console.log(req.body)
    let sql = `INSERT INTO coche (marca,modelo,color) VALUES ('${marca}','${modelo}', '${color}')`;


    connection.query(sql, function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result)
        let auto_id = result.insertId;
        console.log(auto_id)
        console.log('-------------------------------------');

        let sql2 = `INSERT INTO user (name,last_name,auto_id) VALUES ('${name}','${last_name}',${auto_id})`;

        connection.query(sql2, function(err, result2) {
            if (err) {
                throw err;
            }
            res.send('ok')
        })


    })
})

module.exports = router;