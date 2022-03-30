let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde 
//1 = vermelho 
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// criando ordem aleatoria de cores
function shufferOrder() {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 700;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 350);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// check de ordem de clicks estão iguais
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score} \n Você Acertou, Iniciando Proximo Nivel`) 
        nextLevel();
    }
}

//função para click do usuario
function click(color) {
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();
    }, 350)

    
}

//Funçao que retorna a cor
let createElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}    

//Função Para proximo nivel
let nextLevel = () => {
    score++;
    shufferOrder();
}

//Game over

let lose = () => {
    alert(`Pontuação:  ${score} \n Você Perdeu o Jogo. \n Clique em ok para reiniciar.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Inicio do Jogo
let playGame = () => {
    alert('Bem vindo ao Genius:Iniciando novo Jogo')
    score = 0;

    nextLevel();
}

//Evento de click de cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();