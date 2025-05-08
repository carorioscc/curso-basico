let ataqueJugador
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
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
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
    seleccionarMascotaREnemigo()
}
function seleccionarMascotaREnemigo(){
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


