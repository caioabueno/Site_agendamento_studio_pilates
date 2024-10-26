const API_URL = "http://localhost:3000/alunos";

async function buscarAlunos() {
  try {
      const response = await axios.get(API_URL);
      const alunos = response.data;
      atualizarListaAlunos(alunos);
  } catch (erro) {
      console.error('Erro ao buscar alunos:', erro);
  }
}

async function cadastrarAluno(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const genero = document.getElementById('genero').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const telefone_principal = document.getElementById('telefone_principal').value;
  const telefone_secundario = document.getElementById('telefone_secundario').value;
  const logradouro = document.getElementById('logradouro').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  const data_nascimento = document.getElementById('data_nascimento').value;
  const data_adesao = '10/10/10'; //chumbado, mudar 
  const aulas_participadas = '0'; //chumbado mas está certo
  const status_matricula = 'ativa'; //esse também ta certo

  const novoAluno = {
      nome,
      genero,
      email,
      cpf,
      telefone_principal,
      telefone_secundario,
      logradouro,
      bairro,
      cidade,
      estado,
      data_nascimento,
      data_adesao,
      aulas_participadas,
      status_matricula
    };

  try {
      await axios.post(API_URL, novoAluno);
      alert('Aluno cadastrado com sucesso!');
      document.getElementById('matriculaForm').reset();
  } catch (erro) {
      console.error('Erro ao cadastrar aluno:', erro);
      alert('Erro ao cadastrar aluno. Verifique os dados e tente novamente.');
  }
}

document.getElementById('matriculaForm').addEventListener('submit', cadastrarAluno);
buscarAlunos();