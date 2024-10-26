const exibeDadosAluno = (
id_aluno,
nome,
email,
cpf,
telefone_principal,
telefone_secundario) => {
  const novaLinha = document.createElement('tr')
  const conteudo = `
    <tr>
      <td>${id_aluno}</td>
      <td>${nome}</td>
      <td>${email}</td>
      <td>${cpf}</td>
      <td>${telefone_principal}</td>
      <td>${telefone_secundario}</td>
      <td>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item p-0 border-0">
            <button class="btn btn-outline-warning" type="button">Editar</button>
          </li>
          <li class="list-group-item p-0 border-0">
            <button class="btn btn-outline-danger" type="button">Excluir</button>
          </li>
        </ul>
      </td>
    </tr>
`
  novaLinha.innerHTML = conteudo
  return novaLinha;
}

const tabela = document.querySelector('[data-tabela]');

const listaAlunos = () =>  {
  return fetch(`http://localhost:3000/alunos`)
  .then(resposta => {
      return resposta.json()
  })
}

listaAlunos()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(exibeDadosAluno(
        elemento.id_aluno,
        elemento.nome, 
        elemento.email,
        elemento.cpf,
        elemento.telefone_principal,
        elemento.telefone_secundario))
})})

console.log(listaAlunos())

