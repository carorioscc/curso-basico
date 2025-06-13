//variable let-puede variar, const ya no cambia ya que se cra el valor que tiene no cambia
const sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
const sectionReiniciar= document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('btn-mascota')
const btnReiniciar = document.getElementById('btn-reiniciar')



const sectionSeleccionarMascota = document.getElementById('seleccion-mascota')

const spanMascotaJugador= document.getElementById('mascota-jugador')
const spanMacotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador= document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []

let ataqueJugador =[]
let ataqueEnemigo = []
let vidasJugador=3 
let vidasEnemigo=3
let opcionDeMokepon
let mascotaJugador
let ataquesMascota
let ataquesMascotaEnemigo
let inputBlacky
let inputCoco
let inputCharly

let botones= []
let btnFuego 
let btnAgua 
let btnTierra 

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
//ejemplo de objetos iterables.
blacky.ataques.push(
    {nombre:'AGUA', id: 'btn-agua'},
    {nombre: 'AGUA', id: 'btn-agua'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'TIERRA', id: 'btn-tierra'},

)
coco.ataques.push(
    {nombre:'FUEGO', id: 'btn-fuego'},
    {nombre: 'AGUA', id: 'btn-agua'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'TIERRA', id: 'btn-tierra'},

)
charly.ataques.push(
    {nombre:'AGUA', id: 'btn-agua'},
    {nombre: 'AGUA', id: 'btn-agua'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'TIERRA', id: 'btn-tierra'},
    {nombre: 'TIERRA', id: 'btn-tierra'},

)
mokepones.push(blacky, coco, charly)


function iniciarJuego(){

    //style guarda los estilos 
    //sectionSeleccionarMascota.style.display='none'
    sectionSeleccionarAtaque.style.display='none'
/**por cada elemento de :foreach */
    mokepones.forEach((mokepon)=>{
        console.log(mokepon.nombre)
        //template literario comillas invertidos
        opcionDeMokepon=`
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `
        contenedorTarjetas.innerHTML+=opcionDeMokepon
        inputBlacky=document.getElementById('Blacky')
        inputCoco=document.getElementById('Coco')
        inputCharly=document.getElementById('Charly')
    });


    //style guarda los estilos 
    //sectionReiniciar.style.display='none'
    //no poner guuion medio a variables
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    

    btnReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    
    //style guarda los estilos 
    sectionSeleccionarMascota.style.display='none'

    sectionSeleccionarAtaque.style.display='flex'
   
	if(inputBlacky.checked){
        spanMascotaJugador.innerHTML=inputBlacky.id
        mascotaJugador = inputBlacky.id
    }else if(inputCoco.checked){
        spanMascotaJugador.innerHTML=inputCoco.id
        mascotaJugador = inputCoco.id
    }else if(inputCharly.checked){
        spanMascotaJugador.innerHTML=inputCharly.id
        mascotaJugador = inputCharly.id
    }else{
        alert("Selecciona una mascota")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques =mokepones[i].ataques

        }
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMascota=`
            <button id=${ataque.id} class="btn-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMascota
    })
     
    btnFuego = document.getElementById('btn-fuego')
    btnAgua = document.getElementById('btn-agua')
    btnTierra = document.getElementById('btn-tierra')
    botones = document.querySelectorAll('.BAtaque')
    /*
    btnFuego.addEventListener('click', ataqueFuego)
    btnAgua.addEventListener('click', ataqueAgua)
    btnTierra.addEventListener('click', ataqueTierra)
    */
}
function secuenciaAtaque(){
    botones.forEach((boton) => {
        //la e es elemento, es el evento, para ver a propiedades de quien se le da click es target
        boton.addEventListener('click', (e) =>{
            /*if(e.target.textContent === 'FUEGO'){
                ataqueJugador.push('FUEGO')
                boton.style.background ='#112f58'
            }*/
            let valor = e.target.textContent
            switch(valor){
                case 'FUEGO' :
                    ataqueJugador.push('FUEGO')
                    boton.style.background ='#112f58'
                    break;
                case 'AGUA' :
                    ataqueJugador.push('AGUA')
                    boton.style.background ='#112f58'
                    break;
                case 'TIERRA' :
                    ataqueJugador.push('TIERRA')
                    boton.style.background ='#112f58'
                    break;
            }
            ataqueAleatorioEnemigo()
            console.log(ataqueJugador)
        })
    })
    
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(0 ,mokepones.length-1)
    spanMacotaEnemigo.innerHTML=mokepones[ataqueAleatorio].nombre
    ataquesMascotaEnemigo = mokepones[ataqueAleatorio].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMascotaEnemigo.length-1)

    switch(ataqueAleatorio){
        case 0 : case 1:
            ataqueEnemigo.push('FUEGO')
            
            break;
        case 3 : case 4 :
            ataqueEnemigo.push('AGUA')
            break;
        case 2 :
            ataqueEnemigo.push('TIERRA')
            break;
    }
    console.log(ataqueEnemigo)
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
