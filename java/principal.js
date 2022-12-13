let malla;
let flag;
let talle;
let mod;
let encontrado;
/* const productos = [
    { id: 1, nombre: "janina", precio: 1000, img:"./img/Janina.jpg", cantidad: 1},
    { id: 2, nombre: "corallina", precio: 700, img: "./img/Corallina.jpg", cantidad: 1 },
    { id: 3, nombre: "volvox", precio: 800, img:"./img/Volvox.jpg", cantidad: 1},
    { id: 4, nombre: "clytia", precio: 1750, img:"./img/Clytia.jpg", cantidad: 1 },
  ]; */
  fetch("./datos.json")
  .then (response => response.json())
  .then(datos =>{
      productos = datos
    })
    let productos =[]
  let das= true;
/* let carrito =[] */
let carro = []
const carritoContenedor = document.querySelector('#carritoContenedor')
document.addEventListener('DOMContentLoaded', ()=> {
    carro= JSON.parse(localStorage.getItem("carro")) || []
    mostrarCarrito()
})

fetch("./datos.json")
.then (response => response.json())
.then(datos =>{
    datos.forEach(productos=>{
        let card = document.getElementById("contenedor");
        card.innerHTML += ` <div class="card" style="width: 18rem;" id="cards">
         <img src="${productos.img}" class="card-img-top" alt="${productos.nombre}">
    <div class="card-body">
        <h5 class="card-title">${productos.nombre} </h5>
        <p class="card-text">Bikini ${productos.nombre} </p>
        <p class="card-text">Precio: $${productos.precio} </p>
        <p class="card-text">Cantidad: ${productos.cantidad} </p>
        <button onclick="agregarProducto(${productos.id})" id="boton" class="btn btn-primary"> Agregar al carrito </button>
        </div>
        </div>
        
        `;
    })
})

function agregarProducto(id){
    const existe = carro.some(prod => prod.id === id)
    if (existe) {
        const prod = carro.map(prod => {
            prod.id === id && prod.cantidad++
        })
    } else {
        const itm = productos.find((x) => x.id === id)
        carro.push(itm)
        Swal.fire({
            title: "Agregado al carrito",
            icon: "success",
            confirmButtonText: "Genial!",
        });
    }
    mostrarCarrito()
}
const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')
    modalBody.innerHTML=''
   carro.forEach((x)=>{
       const{id, nombre, precio, img, cantidad}=x
       modalBody.innerHTML += ` 
       <div class= "modal-contenedor"> 
    <div>
    <img class="img-fluid img-carrito" src="${img}"/></div>
    <div>
    <p>Producto: ${nombre}</p>
    <p>Precio: $${precio}</p>
    <p>Cantidad: ${cantidad}</p>
    <button onclick="eliminarProducto(${id})" class = "btn btn-danger">Eliminar producto</button>
    </div>
    </div>
    `
   })

 if(  carro.length === 0) {
      modalBody.innerHTML =`<p class= "text-center text-primary">¡Aún no agregaste nada!</p>`}
  
      carritoContenedor.textContent= carro.length
      precioTotal.innerText= carro.reduce((acum, prod )=>acum+prod.cantidad *prod.precio, 0)
   guardarStorage()
}    

function eliminarProducto(id){
    const juegoId= id
    carro= carro.filter((juego)=> juego.id !== juegoId)
    mostrarCarrito()}

function guardarStorage(){
    localStorage.setItem("carro", JSON.stringify(carro))
}

const vaciarCarrito = document.querySelector('#vaciarCarrito')
vaciarCarrito.addEventListener('click', () => {
    carro.length=[]
    mostrarCarrito()
    })
    const precioTotal = document.querySelector('#precioTotal')



    /* mallas();
    encontrar();
    modelos();
    
    do
    {let desea = prompt("Desea seguir comprando?");
    if (desea == "si") {
        mallas();
        encontrar();
        modelos();
        
    } else {
        das= false;
        let total = carrito.reduce((acum, item)=>acum + item.precio, 0)
        alert ( "gracias por su compra! el total a abonar es: "+ total) ;
    }} while(das)
    
    
    function mallas(){
        malla = prompt ("seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")
        
        while( (malla!="1" && malla!="2" )){
            
            malla = prompt("Opcion invalida. Seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")     
        }
        
        if (malla == 1) {
            alert("selecciono Bikini");
            document.write(" Bikini ")
        } else if (malla == 2) {
            alert("selecciono Enteriza");
            document.write(" Enteriza ")
        }
    } */
    /* seleccion de modelos */
    /* function encontrar () {
        alert("los modelos disponibles son: Janina, Corallina, Volvox, Clytia y Laminaria")
          mod = prompt("Ingrese el nombre del producto que desea").toLowerCase();
        encontrado = false;
        while((mod!="janina" && mod!="corallina" && mod!="volvox" && mod!="clytia" && mod!="laminaria")){
            mod = prompt("No contamos con ese modelo. Seleccione alguno de los modelos disponibles: Janina, Corallina, Volvox, Clytia y Laminaria")
        }
        
        for(const producto of productos){
          if(producto.nombre === mod){
            alert('selecciono '+ mod)
            carrito.push(producto)
            document.write(mod)
            encontrado = true;
          }
        }
        if(encontrado){
          alert("Producto disponible");
        }else{
          alert("Producto no disponible");
        }
    }
    
       */
    /* seleccion de talle de malla */
     
    /* aviso de stock */
    
    /* function modelos(){
        flag = true;
        while (flag) {
            talle = prompt("Seleccione el talle: a. 85/90 b.90/95 c.95/100 d.100/105 e.Otro");
            switch (talle) {
                case "a":
                    alert("contamos con 5 modelos de este talle");
                    document.write(" talle 85/90")
                    flag = false;
                    break;
                case "b":
                    alert("contamos con 2 modelos de este talle");
                    document.write(" talle 90/95")
                    flag = false;
                    break;
                case "c":
                    alert("contamos con 4 modelos de este talle");
                    document.write(" talle 95/100")
                    flag = false;
                    break;
                case "d":
                    alert("contamos con 3 modelos de este talle");
                    document.write(" talle 100/105")
                    flag = false;
                    break;
                case "e":
                    alert("contamos con 2 modelos de este talle");
                    document.write(" talle 105/+")
                    flag = false;
                    break;  
                default:
                    alert("Opcion invalida")
                    break;
            }
        }
    } */


