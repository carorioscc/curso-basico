//se declara la libreria
const express = require("express")
const cors = require("cors")
//se crea la instancia
const app = express()

//indica que va usar la libreria cors
app.use(cors())
//habilita el uso de post pata formato jsoon
app.use(express.json())

const jugadores= []

class Jugador {
    constructor(id){
        this.id=id
    }
    asignarMokepon(mokepon){
        this.mokepon =mokepon
    }
    actualizarPosicion(){
        this.x = x
        this.y = y
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre =nombre
    }
}
//recibe una peticion cuando esta en raiz o ruta

app.get("/unirse", (req, res) =>{
    //genera un numero aleatorio
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})

//post
app.post("/mascota/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    const jugadorIndex = jugadores.findIndex((jugador)=> jugador === jugador.id)
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post(`/mokepon/:jugadorId/posicion`,(req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const x= req.body.x || 0
    const y = req.body.y || 0
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }
    const enemigos = jugadores.filter((jugador)=>jugadorId!==jugador.id)
    //devolver
    res.send({
        enemigos
    })
})
//escucha peticion de los clientes
app.listen(8080, () =>{
    console.log("Servidor")
})