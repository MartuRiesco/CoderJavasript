let presentacion = alert("Bienvenidos a Wachas en Bombachas!")
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
   }}
