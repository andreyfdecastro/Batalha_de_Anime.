const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000;


app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'batalha_entre_personagens_de_anime',
  password: 'ds564',
  port: 5432,
});

app.post('/personagens', async (req, res) => {
  const { nome, anime } = req.body;
  const query = 'INSERT INTO personagens (nome, anime) VALUES ($1, $2)';
  await pool.query(query, [nome, anime]);
  res.send('Personagem adicionado com sucesso!');
}); 