// Esta função faz uma requisição POST para uma URL com um corpo de dados JSON.
function fazPost(url, body) {

  // Faz uma requisição POST usando a API fetch do JavaScript.
  fetch(url, {
    method: "POST", // Método da requisição (POST)
    headers: {
      "Content-Type": "application/json" // Tipo de conteúdo (JSON)
    },
    body: JSON.stringify(body) // Converte o corpo dos dados em JSON
  })
  // Trata a resposta da requisição
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => console.log(data)) // Exibe os dados da resposta no console
  .catch(error => console.error("Erro:", error)); // Trata erros da requisição
}
// Esta função faz uma requisição POST para uma URL com um corpo de dados JSON.

// Esta função é chamada quando o formulário é enviado.
function cadastraUsuario(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Define a URL da API
  let url = "http://localhost/PostCliente";
  let url2 = "http://localhost/PostAgendamento";
  // Obtém os valores dos campos de entrada do formulário
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;

  //entrada da segunda rota
  let dtAgendamento = document.getElementById("dataHora").value;
  let aula = document.getElementById("modalidades").value;
  
  // Cria um objeto com os dados do formulário
  let body = {
    nome: nome,
    telefone: telefone,
    email: email
  };

  let body2 = {
    dtAgendamento: dtAgendamento,
    aula : aula,
    email: email
  }
  // Chama a função fazPost para enviar os dados para a API
  fazPost(url, body);
  fazPost(url2, body2);
}

// Adiciona um event listener para o evento de envio do formulário
document.getElementById("formCadastro").addEventListener("submit", cadastraUsuario);




//http://localhost/GetClientes

// faz get 

// Esta função faz uma requisição GET para uma URL.
function fazGet(url) {
  // Faz uma requisição GET usando a API fetch do JavaScript.
  fetch(url)
    // Trata a resposta da requisição.
    .then(response => response.json()) // Converte a resposta para JSON.
    .then(data => {
      console.log(data); // Exibe os dados da resposta no console.
      exibeTabela(data); // Chama a função para exibir os dados em uma tabela.
    })
    .catch(error => console.error("Erro:", error)); // Trata erros da requisição.
}

// Esta função cria e exibe uma tabela com os dados fornecidos.
function exibeTabela(dados) {
  // Obtém o elemento onde a tabela será inserida.
  const tabelaContainer = document.getElementById("tabelaClientes");
  
  // Cria o elemento da tabela.
  let tabela = document.createElement("table");
  
  // Cria o cabeçalho da tabela.
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  let headers = ["Nome", "Telefone", "Email"]; // Ajuste os cabeçalhos conforme necessário.
  
  headers.forEach(headerText => {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(headerText));
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  tabela.appendChild(thead);
  
  // Cria o corpo da tabela.
  let tbody = document.createElement("tbody");
  dados.forEach(item => {
    let row = document.createElement("tr");
    
    // Ajuste os campos conforme a estrutura dos seus dados.
    let nomeCell = document.createElement("td");
    nomeCell.appendChild(document.createTextNode(item.nome));
    row.appendChild(nomeCell);

    let telefoneCell = document.createElement("td");
    telefoneCell.appendChild(document.createTextNode(item.telefone));
    row.appendChild(telefoneCell);

    let emailCell = document.createElement("td");
    emailCell.appendChild(document.createTextNode(item.email));
    row.appendChild(emailCell);
    
    tbody.appendChild(row);
  });
  tabela.appendChild(tbody);
  
  // Insere a tabela no container.
  tabelaContainer.innerHTML = ""; // Limpa o conteúdo anterior.
  tabelaContainer.appendChild(tabela);
}

// Adiciona um event listener para carregar os dados ao carregar a página.
document.addEventListener("DOMContentLoaded", function() {
  let url = "http://localhost/GetClientes"; // URL da API
  fazGet(url);
});
