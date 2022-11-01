
let presentacion = alert("Bienvenidos a Wachas en Bombachas!")
/* seleccion de tipo de malla */
let malla;
let flag;
let talle;

mallas();
modelos();
 let das= true;
    do
    {let desea = prompt("Desea seguir comprando?");
    if (desea == "si") {
        mallas();
        modelos();
    } else {
        das= false;
        alert("gracias por su compra!");
    }} while(das)

function mallas(){
 malla = prompt ("seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")

while( (malla!="1" && malla!="2" )){

     malla = prompt("Opcion invalida. Seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")     
}

if (malla == 1) {
    alert("selecciono Bikini");
    document.write(" Bikini")
} else if (malla == 2) {
    alert("selecciono Enteriza");
    document.write(" Enteriza")
}
}

/* seleccion de talle de malla */
 
/* aviso de stock */

function modelos(){
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
                break;   default:
                alert("Opcion invalida")
                break;
        }
    }
}