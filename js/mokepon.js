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

const sectionVerMapa=document.getElementById("ver-mapa")
const mapa=document.getElementById("mapa")
let jugadorId = null
let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []

let victoriaJugador = 0
let victoriasEnemigo = 0
let vidasJugador=3 
let vidasEnemigo=3
let opcionDeMokepon
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMascota
let ataquesMascotaEnemigo
let inputBlacky
let inputCoco
let inputCharly

let botones= []
let indexAtaqueJugador
let indexAtaqueEnemigo
let btnFuego 
let btnAgua 
let btnTierra 
let lienzo=mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos
const anchoMaximoMapa = 350

if(anchoDelMapa >anchoMaximoMapa ){ anchoDelMapa=anchoMaximoMapa - 20 }
class Mokepon{
    //constructo
    constructor(nombre, foto, vida,fotoMapa){
        //a esto mismo
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
        this.ancho=40
        this.alto=40
        this.x= aleatorio(0,mapa.width - this.ancho)
        this.y= aleatorio(0, mapa.height - this.alto)

        this.mapaFoto= new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMascota() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
//ejemplo de ob jetos instancia
let blacky = new Mokepon('Blacky', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let coco = new Mokepon('Coco', './assets/mokepons_mokepon_capipepo_attack.png', 2, './assets/capipepo.png')
let charly = new Mokepon('Charly', './assets/mokepons_mokepon_ratigueya_attack.png', 7, './assets/ratigueya.png')

//enemigos
let blackyEnemigo = new Mokepon('Blacky', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let cocoEnemigo = new Mokepon('Coco', './assets/mokepons_mokepon_capipepo_attack.png', 2, './assets/capipepo.png')
let charlyEnemigo = new Mokepon('Charly', './assets/mokepons_mokepon_ratigueya_attack.png', 7, './assets/ratigueya.png')
//ejemplo de objetos iterables.
//ejemplo de objetos iterables.
blacky.ataques.push(
    {nombre:'AGUA', id: 'btn-agua'},
    {nombre: 'AGUA', id: 'btn-agua'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'FUEGO', id: 'btn-fuego'},
    {nombre: 'TIERRA', id: 'btn-tierra'},

)

blackyEnemigo.ataques.push(
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
cocoEnemigo.ataques.push(
    {nombre:'AGUA', id: 'btn-agua'},
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
charlyEnemigo.ataques.push(
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
    sectionVerMapa.style.display="none"
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

    unirseAlJuego()

}
function unirseAlJuego() {
    //fetch nos permite hacer llamadas hacia otros servicios http , post se puede mandar datos, get obtener respuesta
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}


function seleccionarMascotaJugador(){
    //style guarda los estilos 
    sectionSeleccionarMascota.style.display='none'
    
    sectionVerMapa.style.display="flex"
    //cada 50 milisegundo va a ejecutar esa funcion
    
    iniciarMapa()
    /*
    let imageDeCoco= new Image ()
    imageDeCoco.src=coco  
    lienzo.fillRect(5,15, 20, 40)
    */
   
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

    seleccionarMascota(mascotaJugador)
    
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    //seleccionarMascotaEnemigo(mascotaJugador)
}
//funcion post
function seleccionarMascota(mascotaJugador){
    fetch(`http://localhost:8080/mascota/${jugadorId}`,{
        method: "post",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({mascota:mascotaJugador})
    })    
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
                    boton.disabled = true
                    break;
                case 'AGUA' :
                    ataqueJugador.push('AGUA')
                    boton.style.background ='#112f58'
                    boton.disabled = true
                    break;
                case 'TIERRA' :
                    ataqueJugador.push('TIERRA')
                    boton.style.background ='#112f58'
                    boton.disabled = true
                    break;
            }
            ataqueAleatorioEnemigo()
            console.log(ataqueJugador)
        })
    })
    
}
function seleccionarMascotaEnemigo(enemigo){
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
    iniciarPelea()
    //combate()
}
function iniciarPelea(){
    if(ataqueJugador.length ===5){
        combate()
    }
}
function oponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index]===ataqueEnemigo[index]){
            oponentes(index, index)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[index]==='FUEGO' &&ataqueEnemigo[index]==='TIERRA'){
            oponentes(index, index)
            crearMensaje('GANASTE')
            victoriaJugador++
            spanVidasJugador.innerHTML=victoriaJugador
        }else if(ataqueJugador[index]==='AGUA' &&ataqueEnemigo[index]==='FUEGO'){
            oponentes(index, index)
            crearMensaje('GANASTE')
            victoriaJugador++
            spanVidasJugador.innerHTML=victoriaJugador
        }else if(ataqueJugador[index]==='TIERRA' &&ataqueEnemigo[index]==='AGUA'){
            oponentes(index, index)
            crearMensaje('GANASTE')
            victoriaJugador++
            spanVidasJugador.innerHTML=victoriaJugador
        }else{
            oponentes(index, index)
            crearMensaje('PERDISTE')
            victoriasEnemigo ++
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if(victoriaJugador===victoriasEnemigo){
        crearMensajeFinal("ESTO FUE UN GRAN EMPATE :)")
    }else if(victoriaJugador > victoriasEnemigo){
        crearMensajeFinal("GANAMOS ")
    }else{
        crearMensajeFinal('PERDISTE')
    }
}

function crearMensaje(resultado){
    console.log(resultado)
    console.log(ataqueJugador)

    //let notificacion = document.getElementById('p')
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    sectionMensaje.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    /*let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con "+ataqueJugador+" la mascota del enemigo ataco con "+ataqueEnemigo+" "+resultado
    sectionMensaje.appendChild(parrafo)*/
    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensaje.innerHTML=resultadoFinal
    sectionReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function pintarCanvas(){

    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.pintarMascota()
    blackyEnemigo.pintarMascota()
    cocoEnemigo.pintarMascota()
    charlyEnemigo.pintarMascota()
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(blackyEnemigo)
        revisarColision(cocoEnemigo)
        revisarColision(charlyEnemigo)
    }

}
function moverDerecha(){
    /*coco.x=coco.x+5
    pintarPersonaje()*/
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    /*
    coco.x=coco.x-5
    pintarPersonaje()
    */
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    /*
    coco.y=coco.y+5
    pintarPersonaje()
    */
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    /*
    coco.y=coco.y-5
    pintarPersonaje()
    */
    mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento (){
    
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY=0
}
//el  eventlistener proporcipon UN EVENTO, o un VALOR
function sePresionoUnaTecla(event){
    //proporciona que tecla presiono
    console.log(event.key)
    switch(key){
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}
function iniciarMapa(){

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    //este evento se ejecuta cuando se presiona una tecla
    window.addEventListener("keydown", sePresionoUnaTecla)
    //este evento se ejecura cuando se deje de presionar las teclas
    window.addEventListener("keyup", detenerMovimiento)

}
function obtenerObjetoMascota(){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]

        }
    }
}

function revisarColision (enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo= enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    
    if(
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo|| 
        derechaMascota < izquierdaEnemigo|| 
        izquierdaMascota > derechaEnemigo
    ){
        return 
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display='flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    //alert("Hay Colision" + enemigo.nombre)
}

//cuando carga todo el html
window.addEventListener('load', iniciarJuego)

/*
clases y objetos no pueden exitir una sin la otra
ejemplo clase:plano casa
objeto : casas
*/
