inicialiar()


// let nome, email, senha
let usuario = {
    nome: "um",
    email: "dois",
    senha: "nuvem"
}
function Logar() {
    let nome = document.getElementById('Lnome').value
    let senha = document.getElementById('Lsenha').value
    if (nome === usuario.nome && senha === usuario.senha) {
        alert("Logado com sucesso")
    } else {
        alert("Tentativa de login fracassada")
    }
    mostrarProdutos()

}

function cadastrar() {
    usuario.nome = document.getElementById('Cnome').value
    usuario.email = document.getElementById('Cemail').value
    usuario.senha = document.getElementById('Csenha').value


    alert("Cadastrado com sucesso")

    mostrarLogin()
}

function limparCadastro() {
    document.getElementById("Cnome").value = " "
    document.getElementById("Cemail").value = " "
    document.getElementById("Csenha").value = " "

    document.getElementById("Lnome").value = " "
    document.getElementById("Lsenha").value = " "
}


function mostrarLogin() {
    esconderTodas()
    document.getElementById("login").style.display = "flex"
    document.getElementById("Lnome").focus()

}

function mostrarCadastro() {
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
    

}
function mostrarProdutos() {
    esconderTodas()

    document.getElementById("produtos").style.display = "flex"

}

function esconderTodas() {

    document.getElementById("login").style.display = "none"
    document.getElementById("cadastro").style.display = "none"
    document.getElementById("produtos").style.display = "none"

}

function inicializar(){
    mostrarLogin()
}


// window.open para abrir outro arquivo html