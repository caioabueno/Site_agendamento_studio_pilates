// Esta função faz uma requisição POST para uma URL com um corpo de dados JSON.
function fazPost(url, body) {
    // Imprime o corpo dos dados no console para depuração.
    console.log("Body=", body);
  
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
  