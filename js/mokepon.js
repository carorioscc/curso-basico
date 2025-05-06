//no poner guuion medio

function iniciarJuego(){
	let botonMascotaJugador = document.getElementById('btn-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador(){
	alert('Sleccionaste tu mascota')
}

//cuando carga todo el html
window.addEventListener('load', iniciarJuego)


