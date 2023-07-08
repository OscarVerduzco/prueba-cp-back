const express = require('express');
const router = express.Router();

const connection = require('./connection');

router.get('/consulta', (req, res) => {
  const cp = req.query.cp;
  console.log('cp: ', cp);

  const sql = `SELECT c.idColonia, c.nombreColonia, m.nombreMunicipio, e.nombreEstado
               FROM colonia c
               INNER JOIN municipio m ON c.idMunicipio = m.idMunicipio
               INNER JOIN estado e ON c.idEstado = e.idEstado
               WHERE c.cp = ?`;

  connection.query(sql, [cp], (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).json({ error: 'Error al ejecutar la consulta' });
      return;
    }
    console.log('Consulta ejecutada con éxito');

    res.json(results);
  });
});

module.exports = router;
