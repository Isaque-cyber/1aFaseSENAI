inicializar()


let usuarios = []

// let teste = [usuario1, usuario2]
function cadastrar() {
    let usuario = {
        
            nome: document.getElementById('Cnome').value,
            email: document.getElementById('Cemail').value,
            senha: document.getElementById('Csenha').value
        
    }

    usuarios.push(usuario)

    alert("Cadastrado com sucesso!! :D")

    console.log(usuarios)

    limparInputs()
    mostrarLogin()

}

function logar() {
    console.log(usuarios)
    let nome = document.getElementById('Lnome').value
    let senha = document.getElementById('Lsenha').value

    for(let i=0; i<usuarios.length; i++){
        
            if ((nome === usuarios[i].nome || nome === usuarios[i].email) && senha === usuarios[i].senha) {
                alert("Login efetuado com sucesso! Olá"+ usuarios[i].nome)
                limparInputs()
                mostrarProdutos()
            } else {
                alert("Login não efetuado sem sucesso!")
            }

    }
}

function mostrarCadastro() {
    esconderBotoes()
    document.getElementById('Cadastro').style.display = 'flex'
    document.getElementById('Cnome').focus()
}

function mostrarLogin() {
    esconderBotoes()
    document.getElementById('Login').style.display = 'flex'
    document.getElementById('Lnome').focus()

}
function mostrarProdutos() {

    esconderBotoes()
    document.getElementById('Produtos').style.display = 'flex'
    document.getElementById('navbar').style.display = 'flex'

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
for (let i= 0; i<usuarios.length; i++){

    alert(usuarios[i].nome)
}
function inicializar() {
    mostrarCadastro()
}

