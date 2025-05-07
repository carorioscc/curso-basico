
function iniciarJuego(){
    //no poner guuion medio a variables
	let botonMascotaJugador = document.getElementById('btn-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}
function seleccionarMascotaJugador(){
    let inputBlacky=document.getElementById('blacky'),
     inputCoco=document.getElementById('coco'),
     inputCharly=document.getElementById('charly'),
     spanMascotaJugador= document.getElementById('mascota-jugador'),
     spanMacotaEnemigo = document.getElementById('mascota-enemigo');
	if(inputBlacky.checked){
        spanMascotaJugador.innerHTML='Blacky ';
    }else if(inputCoco.checked){
        spanMascotaJugador.innerHTML='Coco ';
    }else if(inputCharly.checked){
        spanMascotaJugador.innerHTML='Charly Brown ';
    }else{
        alert("Selecciona una mascota")
    }
}
//cuando carga todo el html
window.addEventListener('load', iniciarJuego)


