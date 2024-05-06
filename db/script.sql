CREATE DATABASE batalha_entre_personagens_de_anime;

\c batalha_entre_personagens_de_anime;

CREATE TABLE anime_characters (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
power VARCHAR(100) NOT NULL,
level INT NOT NULL,
hp INT NOT NULL
);

CREATE TABLE battles (
id SERIAL PRIMARY KEY,
character1_id INT REFERENCES anime_characters(id),
character2_id INT REFERENCES anime_characters(id),
winner_id INT REFERENCES anime_characters(id)
);