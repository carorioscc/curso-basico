//variable let-puede variar, const ya no cambia ya que se cra el valor que tiene no cambia
const sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
const sectionReiniciar= document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('btn-mascota')
const btnReiniciar = document.getElementById('btn-reiniciar')
const btnFuego = document.getElementById('btn-fuego')
const btnAgua = document.getElementById('btn-agua')
const btnTierra = document.getElementById('btn-tierra')
const sectionSeleccionarMascota = document.getElementById('seleccion-mascota')

const inputBlacky=document.getElementById('blacky')
const inputCoco=document.getElementById('coco')
const inputCharly=document.getElementById('charly')

const spanMascotaJugador= document.getElementById('mascota-jugador')
const spanMacotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador= document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-enemigo")

let mokepones = []

let ataqueJugador
let ataqueEnemigo 
let vidasJugador=3 
let vidasEnemigo=3

class Mokepon{
    //constructo
    constructor(nombre, foto, vida){
        //a esto mismo
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
    }
}
//ejemplo de ob jetos instancia
let blacky = new Mokepon('Blacky', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let coco = new Mokepon('Coco', './assets/mokepons_mokepon_capipepo_attack.png', 2)
let charly = new Mokepon('Charly', './assets/mokepons_mokepon_ratigueya_attack.png', 7)

blacky.ataques.push(
    
)
//ejemplo de objetos iterables.


function iniciarJuego(){

    //style guarda los estilos 
    //sectionSeleccionarMascota.style.display='none'
    sectionSeleccionarAtaque.style.display='none'
 
    //style guarda los estilos 
    sectionReiniciar.style.display='none'
    
    
    //no poner guuion medio a variables
	
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    
     
     btnFuego.addEventListener('click', ataqueFuego)
     btnAgua.addEventListener('click', ataqueAgua)
     btnTierra.addEventListener('click', ataqueTierra)
     btnReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    
    //style guarda los estilos 
    sectionSeleccionarMascota.style.display='none'

    
    //style guarda los estilos 
    sectionSeleccionarAtaque.style.display='flex'

    
     
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
    
    let mascota=''
    switch(ataqueAleatorio){
        case 1 :
            mascota = 'Blacky'
            break;
        case 2 :
            mascota = 'Coco'
            break;
        case 3 :
            mascota = 'Charly Brown'
            break;
    }
    spanMacotaEnemigo.innerHTML = mascota
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
    console.log(vidasJugador)

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
    console.log(resultado)
    console.log(ataqueJugador)


    //let notificacion = document.getElementById('p')
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensaje.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    /*let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con "+ataqueJugador+" la mascota del enemigo ataco con "+ataqueEnemigo+" "+resultado
    sectionMensaje.appendChild(parrafo)*/
    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    

    sectionMensaje.innerHTML=resultadoFinal
    /*
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    */
    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true


    //style guarda los estilos 
    sectionReiniciar.style.display='block'

}


function reiniciarJuego(){
    location.reload();
}


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//cuando carga todo el html
window.addEventListener('load', iniciarJuego)

/*
clases y objetos no pueden exitir una sin la otra
ejemplo clase:plano casa
objeto : casas
*/
