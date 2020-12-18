var options = "\nPiedra = 1 \nPapel = 2 \nTijera = 3"
var player = prompt("Escoje un número: " + options);
var computer = Math.floor(Math.random() * 3 + 1);

function game(player, computer) {
    if ((player < 1) || (player > 3)) {
        result = "Entrada inválida";
    } else if (player == computer) {
        result = "Empate";
    } else if ((player == 1 && computer == 3) || (player == 2 && computer == 1) || (player == 3 && computer == 1)) {
        result = "Ganaste!";
    } else {
        result = "Lo siento, perdiste";
    }
    return result;
}
console.log(options + "\n\nJugador: " + player + "\nComputadora: " + computer + "\n\n" + game(player, computer));