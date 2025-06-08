
usuario = "admin";
senha = "123456";

function irParaLogin() {
  window.location.href = "posLogin.html";
}

function irParaRegistro() {
  window.location.href = "redi2.html";
}

function registrar() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !email || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Registro concluído com sucesso!");
  irParaLogin();
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Simulação de login bem-sucedido
  alert("Login bem-sucedido!");
  window.location.href ="posLogin.html";
}
