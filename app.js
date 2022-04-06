const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let checkInterval = false;
let tempsInitial = 1800;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombres de cycles ${nbDeCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;


btnGo.addEventListener('click', () => {

      if(checkInterval === false) {
      
      checkInterval = true;
      


      tempsInitial--;
      affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

      let timer = setInterval( () => {

            if(pause === false && tempsInitial > 0){
                  tempsInitial--;
                  affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            } 
            else if(pause === false && tempsInitial === 0 && tempsDeRepos === 0) {
                  tempsInitial = 1800;
                  tempsDeRepos = 300;
                  nbDeCycles++;
                  cycles.innerText = `Nombres de cycles ${nbDeCycles}`;
                  affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                  affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }
            else if(pause === false && tempsInitial === 0) {
                  tempsDeRepos--;
                  affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }         

      }, 1000)


      // Bouton reset 
      btnReset.addEventListener('click', () => {
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsDeRepos = 300;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            })

            
      } else {
            // console.log('Merci de ne pas spam le boutton');
            return;
      }

      

})


btnPause.addEventListener('click', () => {
      
      if(pause === false){
            btnPause.innerText = "On repart"
      } else if(pause === true){
            btnPause.innerText = "Pti kawa ?"
      }
      pause = !pause;
} )