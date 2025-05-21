
  function calcular() {
    const nota1 = Number(document.getElementById("nota1").value);
    const peso1 = Number(document.getElementById("pesoNota1").value);

    const nota2 = Number(document.getElementById("nota2").value);
    const peso2 = Number(document.getElementById("pesoNota2").value);

    const nota3 = Number(document.getElementById("nota3").value);
    const peso3 = Number(document.getElementById("pesoNota3").value);

    const nota4 = Number(document.getElementById("nota4").value);
    const peso4 = Number(document.getElementById("pesoNota4").value);

    const nota5 = Number(document.getElementById("nota5").value);
    const peso5 = Number(document.getElementById("pesoNota5").value);

    const somaNotasPonderadas = 
      (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5);

    const somaPesos = peso1 + peso2 + peso3 + peso4 + peso5;

    const media = somaPesos === 0 ? 0 : somaNotasPonderadas / somaPesos;

    document.getElementById("resultado").innerText = 
      `Média Ponderada: ${media.toFixed(2)}`;
  }

