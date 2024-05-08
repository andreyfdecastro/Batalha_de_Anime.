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

INSERT INTO anime_characters (name, power, level, hp) VALUES ('Naruto', 'Rasengan', 10, 90);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Sasuke', 'Chidori', 10, 89);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Sakura', 'Força e Habilidade de Combate', 10, 91);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Goku', 'Kamehameha', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Vegeta', 'Final Flash', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Gohan', 'Masenko', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Ichigo', 'Getsuga Tenshou', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Rukia', 'Sode no Shirayuki', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Renji', 'Zabimaru', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Luffy', 'Gomu Gomu no Pistol', 10, 95);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Zoro', 'Onigiri', 10, 96);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Nami', 'Clima Tact', 10, 90);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Jotaro', 'Star Platinum', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Dio', 'The World', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Jonathan', 'Hamon', 10, 99);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('pucci', 'Made in Heaven', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('kakyoin', 'Hierophant Green', 10, 98);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Kaneki', 'Kagune', 10, 80);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Saitama', 'Serious Punch', 10, 110);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('genos', 'Incineration Cannon', 10, 90);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Mumen Rider', 'Justice Crash', 10, 92);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Tanjirou', 'Respiração do Sol', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Nezuko', 'Força Estrema e Chamas Carmesin', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Inosuke', 'Respiração da Besta', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Zenitsu', 'Respiração do Trovão', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Naofumi', 'Escudo do ódio', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Raphtalia', 'Espada de Ferro', 10, 100);
INSERT INTO anime_characters (name, power, level, hp) VALUES ('Filo', 'Forma de Filolial', 10, 100);
