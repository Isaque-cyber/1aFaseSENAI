inicializar()




let usuario = {
    nome: '',
    email: '',
    senha: ''
}
function cadastrar() {
    usuario.nome = document.getElementById('Cnome').value
    usuario.email = document.getElementById('Cemail').value
    usuario.senha = document.getElementById('Csenha').value
    alert("Cadastrado com sucesso!! :D")

    console.log(usuario)

    limparInputs()
    mostrarLogin()

}

function logar() {
    let nome = document.getElementById('Lnome').value
    let senha = document.getElementById('Lsenha').value

    if ((nome === usuario.nome || nome === usuario.email) && senha === usuario.senha) {
        alert("Login efetuado com sucesso!")
        limparInputs()
        mostrarProdutos()
        // document.getElementById('navbar').style.display = 'block'
    } else {
        alert("Login não efetuado sem sucesso!")
    }
}

function mostrarLogin() {
    esconderBotoes()
    document.getElementById('Login').style.display = 'flex'
    document.getElementById('Lnome').focus()


}
function mostrarCadastro() {
    esconderBotoes()
    document.getElementById('Cadastro').style.display = 'flex'
    document.getElementById('Cnome').focus()

}
function mostrarProdutos() {
    esconderBotoes()
    document.getElementById('Produtos').style.display = 'flex'
    document.getElementById('Pprodutos').focus()
}

function esconderBotoes() {
    document.getElementById('Login').style.display = 'none'
    document.getElementById('Cadastro').style.display = 'none'
    document.getElementById('Produtos').style.display = 'none'
}

function limparInputs() {
    document.getElementById('Cnome').value = ''
    document.getElementById('Cemail').value = ''
    document.getElementById('Csenha').value = ''

    document.getElementById('Lnome').value = ''
    document.getElementById('Lsenha').value = ''
}

function inicializar() {
    mostrarLogin()

}

