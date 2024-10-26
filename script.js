function carregaNav () {
  const menuHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <img src="img/logo_nc_fisiostudio2.png" alt="Logo do NC Fisiostudio" width="40" class="me-2">
                    <span>NC Fisiostudio</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#sobre">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#modalidades">Modalidades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#agendamento">Agendamento</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contato">Contato</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#localizacao">Localização</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

  document.getElementById('menu_js').innerHTML = menuHTML;
}