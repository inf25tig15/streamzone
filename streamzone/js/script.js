/* =========================================================
   StreamZone - JavaScript principal
   Projeto académico de Tecnologias Internet
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  prepararCatalogo();
  prepararFormularioContacto();
  prepararInteracoesInicio();
});


/* ---------- Catálogo XML ---------- */

function prepararCatalogo() {
  const botaoCarregar = document.getElementById("btn-carregar-catalogo");
  const botaoAlternarInfo = document.getElementById("btn-alternar-info");
  const infoCatalogo = document.getElementById("info-catalogo");

  if (botaoCarregar) {
    botaoCarregar.addEventListener("click", carregarCatalogoXML);
  }

  if (botaoAlternarInfo && infoCatalogo) {
    botaoAlternarInfo.addEventListener("click", function () {
      infoCatalogo.classList.toggle("escondido");
    });
  }
}


function carregarCatalogoXML() {
  fetch("xml/catalogo.xml")
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Não foi possível carregar o ficheiro XML.");
      }

      return resposta.text();
    })
    .then(function (textoXML) {
      const parser = new DOMParser();
      const documentoXML = parser.parseFromString(textoXML, "application/xml");

      const erroXML = documentoXML.querySelector("parsererror");

      if (erroXML) {
        throw new Error("Erro na estrutura do ficheiro XML.");
      }

      preencherTabelaCatalogo(documentoXML);
    })
    .catch(function (erro) {
      apresentarErroCatalogo(erro.message);
    });
}


function preencherTabelaCatalogo(documentoXML) {
  const tabela = document.getElementById("tabela-catalogo");

  if (!tabela) {
    return;
  }

  const corpoTabela = tabela.querySelector("tbody");
  const conteudos = documentoXML.getElementsByTagName("conteudo");

  corpoTabela.innerHTML = "";

  if (conteudos.length === 0) {
    const linha = document.createElement("tr");
    const celula = document.createElement("td");

    celula.colSpan = 6;
    celula.textContent = "Não existem conteúdos no catálogo XML.";

    linha.appendChild(celula);
    corpoTabela.appendChild(linha);

    return;
  }

  for (let i = 0; i < conteudos.length; i++) {
    const conteudo = conteudos[i];

    const titulo = obterTexto(conteudo, "titulo");
    const tipo = obterTexto(conteudo, "tipo");
    const genero = obterTexto(conteudo, "genero");
    const duracao = obterTexto(conteudo, "duracao");
    const ano = obterTexto(conteudo, "ano");
    const classificacao = obterTexto(conteudo, "classificacao");

    const linha = document.createElement("tr");

    criarCelula(linha, titulo);
    criarCelula(linha, tipo);
    criarCelula(linha, genero);
    criarCelula(linha, duracao);
    criarCelula(linha, ano);
    criarCelula(linha, classificacao + "/5");

    corpoTabela.appendChild(linha);
  }
}


function obterTexto(elementoPai, nomeElemento) {
  const elemento = elementoPai.getElementsByTagName(nomeElemento)[0];

  if (!elemento) {
    return "";
  }

  return elemento.textContent;
}


function criarCelula(linha, texto) {
  const celula = document.createElement("td");
  celula.textContent = texto;
  linha.appendChild(celula);
}


function apresentarErroCatalogo(mensagem) {
  const tabela = document.getElementById("tabela-catalogo");

  if (!tabela) {
    return;
  }

  const corpoTabela = tabela.querySelector("tbody");

  corpoTabela.innerHTML = "";

  const linha = document.createElement("tr");
  const celula = document.createElement("td");

  celula.colSpan = 6;
  celula.textContent = mensagem;

  linha.appendChild(celula);
  corpoTabela.appendChild(linha);
}

/* ---------- Formulário de contacto ---------- */

function prepararFormularioContacto() {
  const formulario = document.getElementById("form-contacto");
  const mensagemFormulario = document.getElementById("mensagem-formulario");

  if (!formulario || !mensagemFormulario) {
    return;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const conteudo = document.getElementById("conteudo").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 2) {
      mostrarMensagemFormulario("O nome deve ter pelo menos 2 caracteres.", false);
      return;
    }

    if (!validarEmail(email)) {
      mostrarMensagemFormulario("Insere um email válido.", false);
      return;
    }

    if (conteudo === "") {
      mostrarMensagemFormulario("Seleciona o tipo de conteúdo preferido.", false);
      return;
    }

    if (mensagem.length < 10) {
      mostrarMensagemFormulario("A mensagem deve ter pelo menos 10 caracteres.", false);
      return;
    }

    mostrarMensagemFormulario("Feedback enviado com sucesso. Obrigado pela participação.", true);
    formulario.reset();
  });

  formulario.addEventListener("reset", function () {
    mensagemFormulario.textContent = "";
    mensagemFormulario.classList.remove("erro-formulario");
    mensagemFormulario.classList.remove("sucesso-formulario");
  });
}


function validarEmail(email) {
  const expressao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expressao.test(email);
}


function mostrarMensagemFormulario(texto, sucesso) {
  const mensagemFormulario = document.getElementById("mensagem-formulario");

  mensagemFormulario.textContent = texto;

  if (sucesso) {
    mensagemFormulario.classList.add("sucesso-formulario");
    mensagemFormulario.classList.remove("erro-formulario");
  } else {
    mensagemFormulario.classList.add("erro-formulario");
    mensagemFormulario.classList.remove("sucesso-formulario");
  }
}


/* ---------- Interações da página inicial ---------- */

function prepararInteracoesInicio() {
  const hero = document.querySelector(".hero");
  const tituloHero = document.querySelector(".hero h2");
  const cards = document.querySelectorAll(".card");

  if (!hero || !tituloHero) {
    return;
  }

  hero.addEventListener("click", function () {
    tituloHero.textContent = "Streaming multimédia com HTML5, CSS3 e JavaScript";
    hero.classList.toggle("hero-alternativo");
  });

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("card-selecionado");
    });
  });
}