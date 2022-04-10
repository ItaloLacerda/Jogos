

var player, vencedor = null;
var selectPlayer = document.getElementById('Jogador-Atual');
var selectWinner = document.getElementById('Vencedor');


mudarplayer('X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return
    }
   
    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== "-") {
        return
    }

    quadrado.innerHTML = player;
    quadrado.style.color = '#000'

    if( player === 'X') {
        player = 'O'
    } else {
      player= 'X'
    }
    
    mudarplayer(player);
    chekWinner();
    
}

function mudarplayer(valor) {

     player = valor
     selectPlayer.innerHTML = player
}

function chekWinner() {
    var quadrado1 = document.getElementById(1); 
    var quadrado2 = document.getElementById(2); 
    var quadrado3 = document.getElementById(3); 
    var quadrado4 = document.getElementById(4); 
    var quadrado5 = document.getElementById(5); 
    var quadrado6 = document.getElementById(6); 
    var quadrado7 = document.getElementById(7); 
    var quadrado8 = document.getElementById(8); 
    var quadrado9 = document.getElementById(9); 

    if ( winner(quadrado1,  quadrado2, quadrado3)) {
        colorbutton(quadrado1,  quadrado2, quadrado3);
        alterarWiner(quadrado1);
    }else if ( winner(quadrado4,  quadrado5, quadrado6)) {
        colorbutton(quadrado4,  quadrado5, quadrado6);
        alterarWiner(quadrado4);
    } else if ( winner(quadrado7,  quadrado8, quadrado9)) {
        colorbutton(quadrado7,  quadrado8, quadrado9);
        alterarWiner(quadrado7);
    } else if ( winner(quadrado1,  quadrado4, quadrado7)) {
        colorbutton(quadrado1,  quadrado4, quadrado7);
        alterarWiner(quadrado1);
    } else if ( winner(quadrado2,  quadrado5, quadrado8)) {
        colorbutton(quadrado2,  quadrado5, quadrado8);
        alterarWiner(quadrado2);
    } else if ( winner(quadrado3,  quadrado6, quadrado9)) {
        colorbutton(quadrado3,  quadrado6, quadrado9);
        alterarWiner(quadrado3);
    } else  if ( winner(quadrado1,  quadrado5, quadrado9)) {
        colorbutton(quadrado1,  quadrado5, quadrado9);
        alterarWiner(quadrado1);
    } else if ( winner(quadrado3,  quadrado5, quadrado7)) {
        colorbutton(quadrado3,  quadrado5, quadrado7);
        alterarWiner(quadrado3);
    }
    
}
function alterarWiner(quadrado) {
    vencedor = quadrado.innerHTML;
    selectWinner.innerHTML = vencedor;

}

function colorbutton(quadrado1, quadrado2, quadrado3){
    quadrado1.style.color = '#00ff00'
    quadrado2.style.color = '#00ff00'
    quadrado3.style.color = '#00ff00'
    quadrado1.style.background = 'rgb(0 , 0 , 0)'
    quadrado2.style.background = 'rgb(0 , 0 , 0)'
    quadrado3.style.background = 'rgb(0 , 0 , 0)'
}

function winner(quadrado1, quadrado2, quadrado3) {
    var eIgual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;    
    }
    return eIgual;

}

function reiniciar(){
    
    vencedor = null
    selectWinner.innerHTML = '';

    for(let i = 1 ; i <= 9 ; i++) {
        var quadrado = document.getElementById(i)
        quadrado.style.background = '#f0f8ff'
        quadrado.style.color = '#f0f8ff'
        quadrado.innerHTML = '-'
    };

    mudarplayer('X');
}


