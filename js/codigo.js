function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
    let resultado='';
    if(jugada==1){
        resultado="Piedra "
    }else if(jugada==2){
        resultado="Papel"
    }else if(jugada==3){
        resultado="Tijera"
    }else{
        resultado="Perder"
    }
}

//1 es piedra 2 es papel, 3 tijera
let jugador = 0
let min = 1
let max = 3
let pc=0
let triunfos = 0
let perdidas = 0
while(triunfos < 3 && perdidas < 3 ){
    pc = aleatorio(min, max)
    jugador = prompt("Elige 1 para piedra, 2 papel, 3 tijera")

    alert('El jugador eligio '+eleccion(jugador))

    alert('El pc eligio '+eleccion(pc))
    //combate
    if(pc==jugador){
        alert("Empate")
    }else if(jugador==1 && pc==3){
        alert("Ganaste")
        triunfos ++
    }else if(jugador==2 && pc==1){
        alert("Ganaste")
        triunfos++
    }else{
        alert("Perdiste")
        perdidas++
    }
}

//let pc = 2
//let pc = Math.floor(Math.random()*(max-min+1)+min)
alert("Ganaste "+triunfos+" y perdiste "+perdidas)