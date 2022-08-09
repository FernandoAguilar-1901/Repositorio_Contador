alert("all good")

//Necesito que este contador haga 3 cosas
//Que incremente de uno en uno
//Que decremente de uno en uno
//Borrar toda la cuenta
//Necesitamos iniciar en 0

let valorContador = 0; //Nuestro valor inicial es 0

function agregar(){
    valorContador++;
    document.getElementById("contador").innerHTML = valorContador;
}

function quitar(){
    valorContador--;
    document.getElementById("contador").innerHTML = valorContador;
}

function borrar(){
    valorContador=0;
    document.getElementById("contador").innerHTML = valorContador;
}
