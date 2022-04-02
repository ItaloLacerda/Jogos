//  Variaveis Globais
const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJump = false;
let posicion = 0;


//crianção de evento de click
 function hendleKeyUp(event) {
     if (event.keyCode === 32) {
       if (!isJump){
        jump();
       }
        
     }
 }


// Função Pular
 function jump(){

     isJump = true;
     
     let upInterval = setInterval(() => {
      if(posicion >= 150) {
          clearInterval(upInterval);

          // Dessendo
          let downIterval = setInterval(() => {
           if (posicion <= 0){
               clearInterval(downIterval);
               isJump = false
           } else {
            posicion -= 20;
            dino.style.bottom = `${posicion}px`;
        }
        }, 20)

      } else {
          // Subir 
        posicion += 20;
        dino.style.bottom = `${posicion}px`;
      }
     }, 20)
 }

 function creathCactus () {
    const cactus = document.createElement('div');
    let posicioncactus = 1000;
    let roundtime = Math.random() * 5000;

    cactus.classList.add('cactus')
    cactus.style.left = `${posicioncactus}px`
    background.appendChild(cactus);

    let lefthInterval = setInterval(() => {
        posicioncactus -= 10
        cactus.style.left = `${posicioncactus}px`;

        if (posicioncactus < -60) {
            clearInterval(lefthInterval)
            background.removeChild(cactus);
        } else if (posicioncactus > 0 && posicioncactus < 60 && posicion < 60) { 
            clearInterval(lefthInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim De Jogo</h1>'
        } else {
            posicioncactus -= 10
            cactus.style.left = `${posicioncactus}px`
        }
    }, 20) 

    setTimeout(creathCactus, roundtime);
}



 creathCactus();

document.addEventListener('keyup', hendleKeyUp );