function jornada(){
    let distCorrida = Number(prompt("Digite a ditância da corrida: (Km)"))

    let tempoSeg = distCorrida  / 300000
    let tempoMinuto = tempoSeg / 60
    let tempoHoras = tempoMinuto / 60
    let tempoDias = tempoHoras / 24
    let tempoMes = tempoDias / 30
    let tempoAno = tempoMes / 12
    let sobraSeg =  tempoSeg % 60
    let sobraMinuto = tempoMinuto % 60
    let sobraHoras = tempoHoras % 24
    let sobraDias = tempoDias % 30
    let sobraMes = tempoMes % 12
    let sobraAnos = tempoAno %12
    if(tempo < 60){
        alert(" tempo " + tempoSeg + "segundos")
    }else if(tempoMinuto>60){
        alert("tempo "+ tempoMinuto+ "minutos," +"e" +sobraSeg )

    }else if(tempoHoras > 24){
    alert("tempo "+ tempoHoras+ "Horas," + " e " +sobraMinuto +" e " + sobraSeg+ ".")

    }else if(tempoDias > 30){
    alert("tempo "+tempoDias+"e "+ sobraHorasHoras+ "Horas," + " e " +sobraMinuto +" e " + sobraSeg+ ".")
    
    }else if(tempoMes > 12){
    alert("tempo "+tempoMes+" e "+ sobraDias+" dias"+ sobraHoras+ "horas"+ sobraMinuto +"minutos"+ tempoSeg +"segundos")

    }else if(tempoAno >12){
    alert("tempo "+anos+" anos, e "+tempoMes+" meses "+ sobraDias+" dias "+ sobraHoras+ "horas"+ sobraMinuto +"minutos"+ tempoSeg +"segundos")
    }



      
}
   