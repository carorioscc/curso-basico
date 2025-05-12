let ataqueJugador, ataqueEnemigo, vidasJugador, vidasEnemigo
function iniciarJuego(){
    //no poner guuion medio a variables
	let botonMascotaJugador = document.getElementById('btn-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let btnFuego = document.getElementById('btn-fuego'), 
     btnAgua = document.getElementById('btn-agua'),
     btnTierra = ocument.getElementById('btn-tierra')
     btnFuego.addEventListener('click', ataqueFuego)
     btnAgua.addEventListener('click', ataqueAgua)
     btnTierra.addEventListener('click', ataqueTierra)

}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
    ataqueAleatorioEnemigo();
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
    taqueAleatorioEnemigo();
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
    taqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    switch(ataqueAleatorio){
        case 1 :
            ataqueEnemigo = 'FUEGO'
            break;
        case 2 :
            ataqueEnemigo = 'AGUA'
            break;
        case 3 :
            ataqueEnemigo = 'TIERRA'
            break;
    }
    combate()
}

function combate(){

    let spanVidasJugador= document.getElementById('vidas-jugador')
    let spanvidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("Empate")
        vidasEnemigo--
    }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
        crearMensaje("Ganaste")
    }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO'){
        crearMensaje("Ganaste")
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("Ganaste") 
    }else{
        crearMensaje("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
        spanVidasJugador.innerHTML = vidasJugador
    }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con "+ataqueJugador+" la mascota del enemigo ataco con "+ataqueEnemigo+" "+resultado
    sectionMensaje.appendChild(parrafo)
}
function seleccionarMascotaJugador(){
    let inputBlacky=document.getElementById('blacky'),
     inputCoco=document.getElementById('coco'),
     inputCharly=document.getElementById('charly'),
     spanMascotaJugador= document.getElementById('mascota-jugador')
     
	if(inputBlacky.checked){
        spanMascotaJugador.innerHTML='Blacky ';
    }else if(inputCoco.checked){
        spanMascotaJugador.innerHTML='Coco ';
    }else if(inputCharly.checked){
        spanMascotaJugador.innerHTML='Charly Brown ';
    }else{
        alert("Selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMacotaEnemigo = document.getElementById('mascota-enemigo')
    let mascota=''
    switch(ataqueAleatorio){
        case 1 :
            mascota = 'Blacky'
            break;
        case 2 :
            mascota = 'Coco'
            break;
        case 3 :
            mascota = 'Charly'
            break;
    }
    spanMacotaEnemigo.innerHTML = mascota
}


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//cuando carga todo el html
window.addEventListener('load', iniciarJuego)


