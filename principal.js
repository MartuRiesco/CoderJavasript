/* let presentacion = alert("Bienvenidos a Wachas en Bombachas!")
let malla = prompt ("seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")
if (malla==1){
    alert("selecciono Bikini");
}else if(malla==2){
    alert("selecciono Enteriza");
}else{
    alert("Opcion no valida")
}
let talle = prompt ("Seleccione el talle: a. 85/90 b.90/95 c.95/100 d.100/105 e.Otro");

while(talle!="esc"){
   switch (talle) {
       case "a":
            alert("contamos con 5 modelos de este talle");
            break;
        case "b":
            alert("contamos con 2 modelos de este talle");
            break;
        case "c":
            alert("contamos con 4 modelos de este talle");
            break;
        case "d":
            alert("contamos con 3 modelos de este talle");
            break;
        case "e":
            alert("contamos con 2 modelos de este talle");
            break;
       default:
           alert("Opcion invalida")
           break;
   }
   talle = prompt("ingrese el talle deseado a. 85/90 b.90/95 c.95/100 d.100/105 e.Otro")
}
 */

let presentacion = alert("Bienvenidos a Wachas en Bombachas!")
/* seleccion de tipo de malla */
let malla = prompt("seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")
let dis = true
do{
    if (malla == 1) {
        alert("selecciono Bikini");
        document.write("Bikini")
        dis = false;
    } else if (malla == 2) {
        alert("selecciono Enteriza");
        document.write("Enteriza")
        dis = false;
    }else{
        malla = prompt("Opcion invalida. Seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")     
    }
}while (dis)


/* seleccion de talle de malla */
let talle = prompt("Seleccione el talle: a. 85/90 b.90/95 c.95/100 d.100/105 e.Otro");

let flag = true;
/* aviso de stock */
while (flag) {
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
    let desea = prompt("Desea seguir comprando?")
    if (desea == "si") {
        flag = true
        malla = prompt("seleccione el tipo de malla que desea comprar: 1. Bikini 2. Enteriza")
        
        talle = prompt("Seleccione el talle: a. 85/90 b.90/95 c.95/100 d.100/105 e.Otro");
    } else {
        flag = false;
        alert("gracias por su compra!")
    }
}
