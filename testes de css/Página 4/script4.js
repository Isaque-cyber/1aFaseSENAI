
function mostrarLogin() {
    document.getElementById("login").style.display = "flex"
    document.getElementById("cadastro").style.display = "none"
}

function mostrarCadastro() {
    document.getElementById("login").style.display = "none"
    document.getElementById("cadastro").style.display = "flex"

}
function Logar() {
    // Coleta os valores dos campos de login
    const email = document.getElementById("name").value;
    const senha = document.getElementById("senhaLogin").value;
}