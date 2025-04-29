function jornada(){
    let distCorrida = Number(prompt("Digite a ditância da corrida: (Km)"))
    let resultadoTempo = distCorrida / 300000

    if(resultadoTempo < 60 && resultadoTempo >=0){
        alert("O tempo foi: "+ resultadoTempo + "segundo(s).")

    }else if(resultadoTempo >= 60 && resultadoTempo< 3600){
        resultadoTempo = resultadoTempo / 60
        alert("O tempo foi: "+ resultadoTempo  +"minuto(s).")
   
    }else if(resultadoTempo >= 3600 && resultadoTempo< 86400){ 
        resultadoTempo = resultadoTempo / 3600
        alert("O tempo foi: "+ resultadoTempo  +"hora(s).")

    }else if(resultadoTempo >= 86400 && resultadoTempo<604800){ 
        resultadoTempo = resultadoTempo / 86400
        alert("O tempo foi: "+ resultadoTempo  +"hora(s).")

    }else if(resultadoTempo >= 2629800 && resultadoTempo < 31557600 ){
        resultadoTempo = resultadoTempo / 2629800
        alert("O tempo foi: "+ resultadoTempo  + "dias(s).")

    }else{(resultadoTempo >= 31557600 )
        resultadoTempo = resultadoTempo / 31557600
        alert("O tempo foi: "+ resultadoTempo  + "mese(s).")
    }

}
