CREATE TABLE PLANO (
	id_plano INT NOT NULL AUTO_INCREMENT,
	tipo VARCHAR(30) NOT NULL,
	valor FLOAT NOT NULL,
	qtd_aulas INT NOT NULL,
	PRIMARY KEY (id_plano)
);


CREATE TABLE PROFESSOR (
	id_professor INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(60) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	telefone_principal VARCHAR(15) NOT NULL,
	telefone_secundario VARCHAR(14),
	email VARCHAR(40) NOT NULL,
	logradouro VARCHAR(80),
	bairro VARCHAR(50),
	cidade VARCHAR(30),
	estado VARCHAR(2),
	PRIMARY KEY (id_professor)
);


CREATE TABLE AULA (
	id_aula INT NOT NULL AUTO_INCREMENT,
	id_professor INT NOT NULL,
	nome VARCHAR(30) NOT NULL,
	descricao VARCHAR(100),
	duracao TIME,
	PRIMARY KEY (id_aula)
);


CREATE TABLE GRADE_AULA (
	id_grade_aula INT NOT NULL AUTO_INCREMENT,
	id_aula INT NOT NULL,
	dia_semana VARCHAR(13) NOT NULL,
	horario TIME NOT NULL,
	PRIMARY KEY (id_grade_aula)
);


CREATE TABLE ALUNO (
	id_aluno INT NOT NULL AUTO_INCREMENT,
	id_plano INT NOT NULL,
	nome VARCHAR(60) NOT NULL,
	genero VARCHAR(20),
	email VARCHAR(40) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	telefone_principal VARCHAR(14) NOT NULL,
	telefone_secundario VARCHAR(14),
	logradouro VARCHAR(80) NOT NULL,
	bairro VARCHAR(50) NOT NULL,
	cidade VARCHAR(30) NOT NULL,
	estado VARCHAR(2) NOT NULL,
	data_nascimento DATE NOT NULL,
	data_adesao DATE NOT NULL,
	data_ultima_aula DATE NOT NULL,
	aulas_participadas INT NOT NULL,
	status_matricula VARCHAR(15) NOT NULL,
	PRIMARY KEY (id_aluno)
);


CREATE TABLE AGENDAMENTO (
	id_agendamento INT NOT NULL AUTO_INCREMENT,
	id_aula INT NOT NULL,
	id_grade_aula INT NOT NULL,
	id_aluno INT NOT NULL,
	data DATE NOT NULL,
	status VARCHAR(10) NOT NULL,
	PRIMARY KEY (id_agendamento)
);

-- CREATE TABLE HISTORICO_COMPRA ();
	


ALTER TABLE ALUNO ADD CONSTRAINT plano_aluno_fk
FOREIGN KEY (id_plano)
REFERENCES PLANO (id_plano)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE AULA ADD CONSTRAINT professor_aula_fk
FOREIGN KEY (id_professor)
REFERENCES PROFESSOR (id_professor)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE GRADE_AULA ADD CONSTRAINT aula_grade_aula_fk
FOREIGN KEY (id_aula)
REFERENCES AULA (id_aula)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE AGENDAMENTO ADD CONSTRAINT aula_agendamento_fk
FOREIGN KEY (id_aula)
REFERENCES AULA (id_aula)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE AGENDAMENTO ADD CONSTRAINT grade_aula_agendamento_fk
FOREIGN KEY (id_grade_aula)
REFERENCES GRADE_AULA (id_grade_aula)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE AGENDAMENTO ADD CONSTRAINT aluno_agendamento_fk
FOREIGN KEY (id_aluno)
REFERENCES ALUNO (id_aluno)
ON DELETE NO ACTION
ON UPDATE NO ACTION;



-- --------------------------------------------------------------------
-- DADOS TESTE
INSERT INTO PLANO (tipo, valor, qtd_aulas) VALUES ('Mensal', 150.00, 8);
INSERT INTO PLANO (tipo, valor, qtd_aulas) VALUES ('Trimestral', 400.00, 24);
INSERT INTO PLANO (tipo, valor, qtd_aulas) VALUES ('Anual', 1200.00, 96);
INSERT INTO PLANO (tipo, valor, qtd_aulas) VALUES ('Semestral', 650.00, 48);
INSERT INTO PLANO (tipo, valor, qtd_aulas) VALUES ('Livre', 50.00, 1);
-- --------------------------------------------------------------------
INSERT INTO PROFESSOR (nome, cpf, telefone_principal, telefone_secundario, email, logradouro, bairro, cidade, estado) 
VALUES ('Ana Silva', '12345678900', '11987654321', '11999998888', 'ana.silva@email.com', 'Rua A', 'Centro', 'São Paulo', 'SP');
-- --------------------------------------------------------------------
INSERT INTO AULA (id_professor, nome, descricao, duracao) VALUES (1, 'Pilates Básico', 'Aula introdutória ao Pilates', '01:00:00');
INSERT INTO AULA (id_professor, nome, descricao, duracao) VALUES (1, 'Pilates Avançado', 'Aula de nível avançado de Pilates', '01:30:00');
INSERT INTO AULA (id_professor, nome, descricao, duracao) VALUES (1, 'Pilates para Iniciantes', 'Aula para quem nunca praticou Pilates', '00:45:00');
INSERT INTO AULA (id_professor, nome, descricao, duracao) VALUES (1, 'Pilates Solo', 'Aula de Pilates sem equipamentos', '01:00:00');
INSERT INTO AULA (id_professor, nome, descricao, duracao) VALUES (1, 'Pilates com Aparelhos', 'Aula de Pilates com aparelhos especializados', '01:15:00');
-- --------------------------------------------------------------------
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (1, 'Segunda-feira', '08:00:00');
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (2, 'Terça-feira', '09:00:00');
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (3, 'Quarta-feira', '10:00:00');
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (4, 'Quinta-feira', '11:00:00');
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (5, 'Sexta-feira', '12:00:00');
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (1, 'Segunda-feira', '12:00:00');
INSERT INTO GRADE_AULA (id_aula, dia_semana, horario) VALUES (1, 'Segunda-feira', '14:00:00');
-- --------------------------------------------------------------------
INSERT INTO ALUNO (id_plano, nome, genero, email, cpf, telefone_principal, telefone_secundario, logradouro, bairro, cidade, estado, data_nascimento, data_adesao, data_ultima_aula, aulas_participadas, status_matricula)
VALUES (1, 'Pedro Alves', 'Masculino', 'pedro.alves@email.com', '11223344556', '11987654321', '11912345678', 'Rua F', 'Liberdade', 'São Paulo', 'SP', '1995-06-12', '2023-01-01', '2023-01-10', 5, 'Ativo');
INSERT INTO ALUNO (id_plano, nome, genero, email, cpf, telefone_principal, telefone_secundario, logradouro, bairro, cidade, estado, data_nascimento, data_adesao, data_ultima_aula, aulas_participadas, status_matricula)
VALUES (2, 'Maria Ferreira', 'Feminino', 'maria.ferreira@email.com', '22334455667', '11976543210', '11987651234', 'Rua G', 'Ipiranga', 'São Paulo', 'SP', '1990-07-20', '2023-02-15', '2023-03-05', 10, 'Ativo');
INSERT INTO ALUNO (id_plano, nome, genero, email, cpf, telefone_principal, telefone_secundario, logradouro, bairro, cidade, estado, data_nascimento, data_adesao, data_ultima_aula, aulas_participadas, status_matricula)
VALUES (3, 'Fernanda Souza', 'Feminino', 'fernanda.souza@email.com', '33445566778', '11965432198', '11987654321', 'Rua H', 'Aclimação', 'São Paulo', 'SP', '1985-05-30', '2023-03-10', '2023-04-02', 12, 'Inativo');
INSERT INTO ALUNO (id_plano, nome, genero, email, cpf, telefone_principal, telefone_secundario, logradouro, bairro, cidade, estado, data_nascimento, data_adesao, data_ultima_aula, aulas_participadas, status_matricula)
VALUES (4, 'João Lima', 'Masculino', 'joao.lima@email.com', '44556677889', '11932198765', '11976543210', 'Rua I', 'Jardins', 'São Paulo', 'SP', '1992-08-25', '2023-05-05', '2023-06-10', 8, 'Ativo');
INSERT INTO ALUNO (id_plano, nome, genero, email, cpf, telefone_principal, telefone_secundario, logradouro, bairro, cidade, estado, data_nascimento, data_adesao, data_ultima_aula, aulas_participadas, status_matricula)
VALUES (5, 'Aline Costa', 'Feminino', 'aline.costa@email.com', '55667788990', '11987654321', '11998765432', 'Rua J', 'Brooklin', 'São Paulo', 'SP', '1980-10-15', '2023-06-20', '2023-07-15', 3, 'Inativo');
-- --------------------------------------------------------------------
INSERT INTO AGENDAMENTO (id_aula, id_grade_aula, id_aluno, data, status) VALUES (1, 1, 1, '2023-09-01', 'Confirmado');
INSERT INTO AGENDAMENTO (id_aula, id_grade_aula, id_aluno, data, status) VALUES (2, 2, 2, '2023-09-02', 'Pendente');
INSERT INTO AGENDAMENTO (id_aula, id_grade_aula, id_aluno, data, status) VALUES (3, 3, 3, '2023-09-03', 'Cancelado');
INSERT INTO AGENDAMENTO (id_aula, id_grade_aula, id_aluno, data, status) VALUES (4, 4, 4, '2023-09-04', 'Confirmado');
INSERT INTO AGENDAMENTO (id_aula, id_grade_aula, id_aluno, data, status) VALUES (5, 5, 5, '2023-09-05', 'Confirmado');

-- correção na tabela agendamento
-- não era necessária a coluna id_aula pois esse dado já existia na tabela grade_aula, gerando redundancia de dados
ALTER TABLE AGENDAMENTO
DROP CONSTRAINT aula_agendamento_fk;
ALTER TABLE AGENDAMENTO
DROP COLUMN id_aula;
-- -----------------------------------------------------
-- correção na tabela aluno, data da ultima aula deve permitir nulos pois o aluno pode nunca ter feito uma aula
ALTER TABLE ALUNO MODIFY data_ultima_aula DATE NULL;

-- -------------------------------------------------------

-- GET's
/*
*Aulas*
colunas: nome da aula, nome do professor, descrição, duração média
*/
SELECT * FROM AULA;

SELECT A.NOME, P.NOME, A.DESCRICAO, A.DURACAO 
FROM AULA A
INNER JOIN PROFESSOR P
ON P.ID_PROFESSOR = A.ID_PROFESSOR;
-- -------------------------------------------------------
/*
*Grade aulas*
colunas: nome da aula, dia da semana, horário
*/
SELECT * FROM GRADE_AULA;

SELECT A.NOME, GA.DIA_SEMANA, GA.HORARIO
FROM GRADE_AULA GA
INNER JOIN AULA A
ON A.ID_AULA = GA.ID_AULA;
-- -------------------------------------------------------
/*
*Agendamento*
colunas: nome aluno, horário (via FK id_grade_aula), nome da aula, data, status
*/
SELECT * FROM AGENDAMENTO;

SELECT ALU.NOME AS `NOME ALUNO`, GA.HORARIO, A.NOME AS `NOME AULA`, AG.`DATA`, AG.`STATUS`
FROM AGENDAMENTO AG
INNER JOIN ALUNO ALU ON ALU.ID_ALUNO = AG.ID_ALUNO
INNER JOIN GRADE_AULA GA ON GA.ID_GRADE_AULA = AG.ID_GRADE_AULA
INNER JOIN AULA A ON A.ID_AULA = GA.ID_AULA;
-- ---------------------------------------------------------------sequelizemeta

SELECT * FROM ALUNO;