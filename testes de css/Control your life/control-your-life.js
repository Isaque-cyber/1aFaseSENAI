// Função chamada ao registrar um novo usuário
function registrar() {
    event.preventDefault(); // impede que o form recarregue a página

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Preencha todos os campos.");
        return;
    }

    // Salvar dados no localStorage (em JSON)
    const user = { username, email, password };
    localStorage.setItem("usuario", JSON.stringify(user));
    alert("Usuário registrado com sucesso!");

    // Redirecionar para login
    window.location.href = "index.html";
}

// Função chamada ao tentar fazer login
function login() {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const userSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (!userSalvo) {
        alert("Nenhum usuário registrado.");
        return;
    }

    if (userSalvo.username === username && userSalvo.password === password) {
        localStorage.setItem("logado", "true");
        window.location.href = "habits.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Verifica se o usuário está logado ao entrar na página de hábitos
function protegerPaginaHabitos() {
    const estaLogado = localStorage.getItem("logado");
    if (estaLogado !== "true") {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "index.html";
    }
}

// Chamar protegerPaginaHabitos() na habits.html




// function registrar() {
//     event.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value;

//     if (!username || !email || !password) {
//         alert("Preencha todos os campos.");
//         return;
//     }

//     const user = { username, email, password };
//     localStorage.setItem("usuario", JSON.stringify(user));
//     alert("Usuário registrado com sucesso!");
//     window.location.href = "index.html";
// }

// function login() {
//     event.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value;

//     const userSalvo = JSON.parse(localStorage.getItem("usuario"));

//     if (!userSalvo) {
//         alert("Nenhum usuário registrado.");
//         return;
//     }

//     if (userSalvo.username === username && userSalvo.password === password) {
//         localStorage.setItem("logado", "true");
//         window.location.href = "habits.html";
//     } else {
//         alert("Usuário ou senha incorretos.");
//     }
// }

// function protegerPaginaHabitos() {
//     const estaLogado = localStorage.getItem("logado");
//     if (estaLogado !== "true") {
//         alert("Você precisa estar logado para acessar esta página.");
//         window.location.href = "index.html";
//     }
// }

// function logout() {
//     localStorage.removeItem("logado");
//     alert("Você saiu da sua conta.");
//     window.location.href = "index.html";
// }
