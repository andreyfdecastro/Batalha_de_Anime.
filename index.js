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

app.get('/personagens', async (req, res) => {
  const query = 'SELECT * FROM personagens WHERE anime = $1';
  const {rows} = await pool.query(query, [req.query.anime]);
  res.send(rows);
});

app.put('/personagens/:id', async (req, res) => {
  const { nome, anime } = req.body;
  const query = 'UPDATE personagens SET nome = $1, anime = $2 WHERE id = $3';
  await pool.query(query, [nome, anime, req.params.id]);
  res.send('Personagem atualizado com sucesso!');
});

app.delete('/personagens/:id', async (req ,res)=> {
  const query = 'DELETE FROM personagens WHERE id = $1';
  await pool.query(query, [req.params.id]);
  res.send('Personagem deletado com sucesso!');
})

app.listen(port, () =>{
console.log(`Servidor rodando na porta ${port}`)
})