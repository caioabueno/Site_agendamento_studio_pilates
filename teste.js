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

$(document).ready(function(){
  $('#carousel-imagens').slick({
      autoplay:true
  });
  $('.menu-hamburguer').click(function() {
      $('nav').slideToggle();
  })
  $('#telefone').mask('(00) 00000-0000')
  $('form').validate({
      rules:{
          nome: {
              required: true
          },
          email: {
              required: true,
              email: true
          },
          telefone: {
              required: true
          },
          mensagem: {
              required: true
          },
          veiculoInteresse: {
              required: false
          }
      },
      messages: {
          nome: 'Por favor, insira seu nome',
          email: 'Esse campo é obrigatório',
          telefone: 'Esse campo é obrigatório',
          mensagem: 'Esse campo é obrigatório'
      },
      submitHandler: function(form){
          console.log(form)
      },
      invalidHandler: function(evento, validador){
          let camposIncorretos = validador.numberOfInvalids();
          if (camposIncorretos) {
              alert(`Existem ${camposIncorretos} campos incorretos`)
          }
      }
  })
})


//http://localhost/GetClientes

        // Definir data mínima para o agendamento
        let agora = new Date();
        let dataHoraAtual = agora.toISOString().slice(0, 16);
        document.getElementById("dataHora").setAttribute("min", dataHoraAtual);


        $(document).ready(function(){
          // Slick Carousel
          $('#carousel-imagens').slick({
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                  {
                      breakpoint: 1024, // Para telas até 1024px (tablets)
                      settings: {
                          slidesToShow: 2, // Exibe 2 imagens
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 768, // Para telas até 768px (smartphones em paisagem)
                      settings: {
                          slidesToShow: 1, // Exibe 1 imagem
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 480, // Para telas até 480px (smartphones pequenos)
                      settings: {
                          slidesToShow: 1, // Exibe 1 imagem
                          slidesToScroll: 1
                      }
                  }
              ]
          });
          // Slick Carousel

          // Máscara de telefone
          $('#telefone').mask('(00) 00000-0000');
          // Validação do formulário
          $('form').validate({
              rules: {
                  nome: { required: true },
                  email: { required: true, email: true },
                  telefone: { required: true }
              },
              messages: {
                  nome: 'Por favor, insira seu nome',
                  email: 'Esse campo é obrigatório',
                  telefone: 'Esse campo é obrigatório'
              },
              submitHandler: function(form){
                  console.log(form);
              },
              invalidHandler: function(evento, validador){
                  let camposIncorretos = validador.numberOfInvalids();
                  if (camposIncorretos) {
                      alert(`Existem ${camposIncorretos} campos incorretos`);
                  }
              }
          });
      });

            // Máscara de telefone
            $('#telefone').mask('(00) 00000-0000');
            // Validação do formulário
            $('form').validate({
                rules: {
                    nome: { required: true },
                    email: { required: true, email: true },
                    telefone: { required: true }
                },
                messages: {
                    nome: 'Por favor, insira seu nome',
                    email: 'Esse campo é obrigatório',
                    telefone: 'Esse campo é obrigatório'
                },
                submitHandler: function(form){
                    console.log(form);
                },
                invalidHandler: function(evento, validador){
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`);
                    }
                }
            });
