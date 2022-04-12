// receber valores nas variáveis

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let player1 = 0;
let player2 = 0;
let gameOver = false;
let winStates = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

function hendleMove(position) {
    // Se o jogo não tiver vencedor .. continue
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime]
        gameOver = isWin();

        if (!gameOver) {
            // operador ternario que da os termos para verificar se o jogo continua ou não!
            playerTime = (playerTime == 0) ? 1 : 0;

        } else {
            //Limpa o taboleiro quando tiver o vencedor 
            setTimeout(() => {
                resetTab()
            }, 1000)
        }
    }

    return gameOver;
}

// Verifica o ganhador

function isWin() {
    // laço que verifica quando uma sequência é vencedora 
    for (let i = 0; i < winStates.length; i++) {

        let sequence = winStates[i];

        let pos1 = sequence[0];
        let pos2 = sequence[1];
        let pos3 = sequence[2];
        //Checa se a sequência feita pelo jogador é vencedora 

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            setTimeout(() => {
                // Retorna um alerta com o nome do jogador vencedor e com a sequência vencedora 
                swal({

                    title: `O jogador ${playerTime} ganhou com a sequência : ${sequence}   `,
                    text: "Click em 'OK'!",
                    icon: "success",
                    button: "OK",
                });

            }, 200)

            return true;

        }
    }

}

//Limpa o taboleiro

function resetTab() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((zero) => {
        zero.innerHTML = "";

    })

    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
}

//Reinicia o jogo 

function resetJG() {
    location.reload()
}