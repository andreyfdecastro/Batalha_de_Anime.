const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000;


app.use(express.json());


function batalhar(personagem1, personagem2) {
  if(personagem1.nivel > personagem2.nivel) {
    return personagem1;
  } else if(personagem1.nivel < personagem2.nivel) {
    return personagem2;
  } else {
    if(personagem1.hp > personagem2.hp) {
      return personagem1;
    } else if(personagem1.hp < personagem2.hp) {
      return personagem2;
    } else {
      return personagem1;
    }
  }
}

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
app.post('/personagens/batalha/:id1/:id2', async (req, res) => {
  const query = 'SELECT * FROM personagens WHERE id = $1';
  const personagem1 = await pool.query(query, [req.params.id1]);
  const personagem2 = await pool.query(query, [req.params.id2]);
  
  app.post('/personagens/batalha/:id1/:id2', async (req, res) => {
    const query = 'SELECT * FROM personagens WHERE id = $1';
    const personagem1 = await pool.query(query, [req.params.id1]);
    const personagem2 = await pool.query(query, [req.params.id2]);
    
    if(personagem1.rows.length > 0 && personagem2.rows.length > 0) {
      const vencedor = batalhar(personagem1.rows[0], personagem2.rows[0]);
      
      const queryBatalha = 'INSERT INTO battles (id_personagem1, id_personagem2, id_vencedor) VALUES ($1, $2, $3)';
      await pool.query(queryBatalha, [req.params.id1, req.params.id2, vencedor.id]);
      
      res.send(vencedor);
    } else {
      res.status(404).send('Um ou ambos os personagens não foram encontrados!');
    }
  });

  if(personagem1.rows.length > 0 && personagem2.rows.length > 0) {
    const vencedor = batalhar(personagem1.rows[0], personagem2.rows[0]);
    res.send(vencedor);
  } else {
    res.status(404).send('Um ou ambos os personagens não foram encontrados!');
  }
});

app.get('/personagens', async (req, res) => {
  const query = 'SELECT * FROM personagens WHERE anime = $1';
  const {rows} = await pool.query(query, [req.query.anime]);
  res.send(rows);
}); 

app.get('/personagens/:id', async (req, res) => {
  const query = 'SELECT * FROM personagens WHERE id = $1';
  const {rows} = await pool.query(query, [req.params.id]);
  if(rows.length > 0) {
    res.send(rows[0]);
  } else {
    res.status(404).send('Personagem não encontrado!');
  }
});

app.get('/personagens/nivel/:nivel', async (req, res) => {
const query = 'SELECT * FROM personagens WHERE nivel = $1';
const {rows} = await pool.query(query, [req.params.nivel]);
res.send(rows);
});

app.get('/personagens/poder/:poder', async (req, res) => {
  const query = 'SELECT * FROM personagens WHERE poder = $1';
  const {rows} = await pool.query(query, [req.params.poder]);
  res.send(rows);
});

app.get('/batalhas', async (req, res) => {
  const query = 'SELECT * FROM battles';
  const {rows} = await pool.query(query);
  res.send(rows);
});

app.get('/batalhas', async (req, res) => {
  const query = `
    SELECT b.*, p1.nome as nome_personagem1, p2.nome as nome_personagem2, pv.nome as nome_vencedor
    FROM battles b
    JOIN personagens p1 ON b.id_personagem1 = p1.id
    JOIN personagens p2 ON b.id_personagem2 = p2.id
    JOIN personagens pv ON b.id_vencedor = pv.id
  `;
  const {rows} = await pool.query(query);
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