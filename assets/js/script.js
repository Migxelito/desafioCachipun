let empate = 0;
let casa = 0;
let gambler = 0; 
let jugador = 0;
let computadora = 0;
let jcom = "";
let jgam = "";

let veces = prompt("¿ Cuantas veces quieres jugar al cachipun?");
for (i = 1; i <= veces; i++) {
    jugador = prompt("Elige tu jugada escribiendo un numero: piedra=0; papel=1; tijera=2")
    computadora = Math.floor(Math.random() * 3);

    if (computadora == 0) {
        jcom = "piedra"
    }
    else if (computadora == 1) {
        jcom = "papel"
    }
    else if (computadora == 2) {
        jcom = "tijera"
    }

    if (jugador == 0) {
        jgam = "piedra"
    }
    else if (jugador == 1) {
        jgam = "papel"
    }
    else if (jugador == 2) {
        jgam = "tijera"
    }
    alert("computador=" + jcom + " vs " + jgam + "=tu")
   
   
    //funciones resultado de partida//
    
    function igualados() {
        alert("¡Igualados en esta partida!!!..")
    }

    function casag() {
        alert("¡Computadora gana esta partida!!!..")
    }

    function gamblerg() {
        alert("¡Has ganado esta partida!!!..")
    }


    //comparaciones para saber resultados de partida//

    if (computadora == jugador) {
        empate++;
        igualados();
    }
    else if (computadora == 0 && jugador == 1) {
        gambler++;
        gamblerg()
    }
    else if (computadora == 0 && jugador == 2) {
        casa++;
        casag();
    }
    else if (computadora == 1 && jugador == 0) {
        casa++;
        casag();
    }
    else if (computadora == 1 && jugador == 2) {
        gambler++;
        gamblerg();
    }
    else if (computadora == 2 && jugador == 0) {
        gambler++;
        gamblerg();
    }
    else if (computadora == 2 && jugador == 1) {
        casa++;
        casag();
    }

//condicionales para saber quien es el ganador final del juego//

}

if (casa == gambler) {
    alert("El juego es un empate");
}

else if (casa > gambler) {
    alert("La computadora ha ganado el juego");
}
else {
    alert("Felicitaciones has ganado el juego");
}
