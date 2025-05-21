function calcular() {
  const peso = parseFloat(document.getElementById("Peso").value);
  const altura = parseFloat(document.getElementById("Altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos para peso e altura.";
    return;
  }

  const imc = peso / (altura * altura);

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
}
