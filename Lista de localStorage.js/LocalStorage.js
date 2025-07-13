// atv1 numero
const maisBtn = document.getElementById("adicionar");
const menosBtn = document.getElementById("diminuir");
const contador = document.getElementById("contador");

let contar = parseInt(localStorage.getItem("contador")) || 0;
contador.innerText = contar;

maisBtn.onclick = () => {
  contar++;
  contador.innerText = contar;
  localStorage.setItem("contador", contar);
};

menosBtn.onclick = () => {
  contar--;
  contador.innerText = contar;
  localStorage.setItem("contador", contar);
};


// atv2 salvar texto
const texto2 = document.getElementById("texto2");

texto2.value = localStorage.getItem("textoSalvo") || "";

texto2.addEventListener("input", () => {
  localStorage.setItem("textoSalvo", texto2.value);
});

// Exercício 3 – Checkbox Persistente
const tarefas = document.querySelectorAll(".tarefa");

tarefas.forEach((tarefa, indice) => {
  const salvo = localStorage.getItem(`tarefa_${indice}`);
  tarefa.checked = salvo === "true";

  tarefa.addEventListener("change", () => {
    localStorage.setItem(`tarefa_${indice}`, tarefa.checked);
  });
});

// Exercício 4 – Nome do Usuário
let nome = localStorage.getItem("nome_usuario");
if (!nome) {
  nome = prompt("Digite seu nome:");
  localStorage.setItem("nome_usuario", nome);
}
document.getElementById("boasVindas").innerText = `Olá, ${nome}!`;

// Exercício 5 – Escolha de Cor
const botoesCor = document.querySelectorAll(".botao-cor");

botoesCor.forEach(botao => {
  botao.addEventListener("click", () => {
    const corEscolhida = botao.dataset.cor;
    document.body.style.backgroundColor = corEscolhida;
    localStorage.setItem("cor_fundo", corEscolhida);
  });
});

const corSalva = localStorage.getItem("cor_fundo");
if (corSalva) document.body.style.backgroundColor = corSalva;

// Exercício 6 – Modo Escuro
const botaoModo = document.getElementById("botaoModoEscuro");
const modoEscuroAtivo = localStorage.getItem("modo_escuro") === "true";

if (modoEscuroAtivo) {
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#fff";
}

botaoModo.addEventListener("click", () => {
  const escuro = document.body.style.backgroundColor === "rgb(34, 34, 34)";
  if (escuro) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("modo_escuro", false);
  } else {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
    localStorage.setItem("modo_escuro", true);
  }
});

// Exercício 7 – Visita Diária
const hoje = new Date().toLocaleDateString();
const dataUltimaVisita = localStorage.getItem("data_visita");
const mensagemVisita = document.getElementById("mensagemVisita");

if (dataUltimaVisita === hoje) {
  mensagemVisita.innerText = "Bem-vindo de volta!";
} else {
  mensagemVisita.innerText = "Saudades de você!";
}
localStorage.setItem("data_visita", hoje);

// Exercício 8 – Última Visita
const dataHoraAtual = new Date().toLocaleString();
const ultimaVisita = localStorage.getItem("ultima_visita");

if (ultimaVisita) {
  document.getElementById("ultimaVisita").innerText = `Última visita: ${ultimaVisita}`;
}
localStorage.setItem("ultima_visita", dataHoraAtual);

// Exercício 9 – Mensagem de Boas-vindas Personalizada
const campoMensagem = document.getElementById("mensagemUsuario");
const exibicaoMensagem = document.getElementById("mensagemExibida");

campoMensagem.value = localStorage.getItem("mensagem_usuario") || "";
exibicaoMensagem.innerText = campoMensagem.value;

campoMensagem.addEventListener("input", () => {
  localStorage.setItem("mensagem_usuario", campoMensagem.value);
  exibicaoMensagem.innerText = campoMensagem.value;
});

// Exercício 10 – Número Secreto
let numeroSecreto = parseInt(localStorage.getItem("numero_secreto"));
if (!numeroSecreto || numeroSecreto < 1 || numeroSecreto > 10) {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  localStorage.setItem("numero_secreto", numeroSecreto);
}

const entradaPalpite = document.getElementById("entradaPalpite");
const botaoVerificar = document.getElementById("botaoVerificar");
const mensagemPalpite = document.getElementById("mensagemPalpite");

botaoVerificar.addEventListener("click", () => {
  const palpite = parseInt(entradaPalpite.value);
  if (palpite === numeroSecreto) {
    mensagemPalpite.innerText = "Parabéns! Você acertou!";
    localStorage.removeItem("numero_secreto");
  } else {
    mensagemPalpite.innerText = "Tente novamente!";
  }
});