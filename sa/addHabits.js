const userSelectedSugHabit = localStorage.getItem('suggested-habit-selected')
if (userSelectedSugHabit) {
    input = document.getElementById("habit-name")
    input.value = (userSelectedSugHabit)
    localStorage.removeItem('suggested-habit-selected')
}
const habitos = JSON.parse(localStorage.getItem('habitos')) || []

function Adicionar() {
    window.location.href = "addhabits.html"
    localStorage.BeberAgua = "Beber Água"
}


function addHabit() {
    const habit = {
        usuario: "Informações do úsuario logado",
        NomeDoHábito: document.getElementById("habit-name").value,
        Descrição: document.getElementById("habit-description").value,
        Frequência: document.getElementById("habit-frequency").value,
        DataDeInício: document.getElementById("habit-start-date").value,
        DataDeTérmino: document.getElementById("habit-end-date").value,
        Meta: document.getElementById("habit-goal").value,
        Notas: document.getElementById("habit-notes").value,
        Notas: document.getElementById("habit-reminder").value,
        Cor: document.getElementById("habit-color").value,
        Adicionar: document.getElementById("add-habit-btn").value,


    }
    habitos.push(habit);
    console.log(habitos);

    localStorage.setItem("habitos", JSON.stringify(habitos));

    


    window.location.href = "habits.html"
}

function verificarCampos() {
    const formulario = document.getElementById("habit-form");
    const campos = formulario.querySelectorAll(".campo");
    let todosPreenchidos = true;
  
    campos.forEach(campo => {
      const input = campo.querySelector("input");
      const erro = campo.querySelector(".erro");
  
      if (!input.value.trim()) {
        todosPreenchidos = false;
        erro.textContent = "Este campo é obrigatório.";
        input.style.border = "2px solid red";
      } else {
        erro.textContent = "";
        input.style.border = "";
      }
    });
  
    if (todosPreenchidos) {
      window.location.href = "outra-pagina.html";
    }
  }
  



function addSuggestedHabit(habit) {
    localStorage.setItem("suggested-habit-selected", habit)
    window.location.href = "addhabits.html"
}

function MeusHabitos(){

}