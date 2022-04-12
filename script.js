document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {
    //Seleciona o id do square clicado
    let position = event.target.id

    if (hendleMove(position)) {
        //se o jogador da vez for o primeiro, retorna caveira , se for o segundo, retorna faca
        playerTime = (playerTime == 0) ? 'Caveira ' : 'Faca';
    }

    // Adicionando os simbolos em suas posições !1

    let square = document.getElementById(position.toString());
    let symbol = board[position]
        //pega a posição clicada e adiciona um simbolo diferente dependendo da vez de cada jogador
    square.innerHTML = `<div class ='${symbol}'></div>`

    //    Dependendo do jogador vencedor, é inserido 1 ponto no placar

    let placar = document.getElementById('placar')
        //Se o simbolo for igual a x e o jogo tiver acabado , adicionar 1 ponto a mais no x
    if (symbol == 'x' && gameOver == true) {

        placar.innerHTML = ` Caveira (${player1}) X ( ${player2 +1}) Faca`
        player2 += 1
        console.log('x')

    }
    //Se o simbolo for igual a "o" e o jogo tiver acabado , adicionar 1 ponto a mais no "o"
    else if (symbol == 'o' && gameOver == true) {

        placar.innerHTML = ` Caveira (${player1 + 1}) X ( ${player2 }) Faca`
        player1 += 1
        console.log('o')
    }


    empate();
}

// Verifica se o jogo empatou ou não
function empate() {

    //Verificando se o jogo empatou não

    let x = board.filter((empata) => empata == "x")
    let o = board.filter((empata) => empata == "o")
        //Se as peças tiverem acabado e o jogo não tiver terminado, considerar como empate
    if (x.length >= 5 && o.length >= 4 || o.length >= 5 && x.length >= 4 && !gameOver) {

        setTimeout(() => {
            swal({
                title: `Caveira e Faca empataram`,
                text: "Click em 'OK'!",
                icon: "info",
                button: "OK",
            });

        }, 200)

        // Se o jogo empatar , limpar o taboleiro em 1000 milissegundos 
        setTimeout(() => {
            resetTab()
        }, 1000)

    }

}