let ataqueJugador, ataqueEnemigo, vidasJugador=3, vidasEnemigo=3
function iniciarJuego(){

    let sectionSeleccionarMascota = document.getElementById('seleccion-ataque')
    //style guarda los estilos 
    sectionSeleccionarMascota.style.display='none'

    let sectionReiniciar= document.getElementById('reiniciar')
    //style guarda los estilos 
    sectionReiniciar.style.display='none'
    
    
    //no poner guuion medio a variables
	let botonMascotaJugador = document.getElementById('btn-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let btnFuego = document.getElementById('btn-fuego'), 
     btnAgua = document.getElementById('btn-agua'),
     btnTierra = document.getElementById('btn-tierra'),
     btnReiniciar = document.getElementById('btn-reiniciar')
     btnFuego.addEventListener('click', ataqueFuego)
     btnAgua.addEventListener('click', ataqueAgua)
     btnTierra.addEventListener('click', ataqueTierra)
     btnReiniciar.addEventListener('click', reiniciarJuego)

}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo();
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo();
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo();
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
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("Empate")
    }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("Ganaste") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }
    //se revia las vidas
    revisarVidas()
}
function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("FELICIDADES, GANASTE :)")
    }else if(vidasJugador == 0){
        crearMensajeFinal(" PERDISTE ")
    }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con "+ataqueJugador+" la mascota del enemigo ataco con "+ataqueEnemigo+" "+resultado
    sectionMensaje.appendChild(parrafo)
}
function crearMensajeFinal(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let btnFuego = document.getElementById('btn-fuego'),
    btnAgua = document.getElementById('btn-agua'),
    btnTierra = document.getElementById('btn-tierra')

    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true

    let sectionReiniciar= document.getElementById('reiniciar')
    //style guarda los estilos 
    sectionReiniciar.style.display='block'

}
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccion-mascota')
    //style guarda los estilos 
    sectionSeleccionarMascota.style.display='none'

    let sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
    //style guarda los estilos 
    sectionSeleccionarAtaque.style.display='flex'

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
function reiniciarJuego(){
    location.reload();
}


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//cuando carga todo el html
window.addEventListener('load', iniciarJuego)


